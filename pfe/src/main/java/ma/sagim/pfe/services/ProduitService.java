package ma.sagim.pfe.services;


import ma.sagim.pfe.model.Categorie;
import ma.sagim.pfe.model.Etagere;
import ma.sagim.pfe.model.Produit;
import ma.sagim.pfe.repositories.ProduitRepository;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    public List<Produit> getProduits(){
        return produitRepository.findAll();
    }

    public Produit createProduit(Produit produit){
        return produitRepository.save(produit);
    }

    public ResponseEntity<Produit> getProduit(Long id){
        Produit produit = produitRepository.findById(id).get();
        if (produit == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(produit, HttpStatus.OK);
    }

    public ResponseEntity<Produit> updateProduit(Produit produit, Long id){
        Produit p = produitRepository.findById(id).get();
        if (p == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        p.setCode(produit.getCode());
        p.setLibelle(produit.getLibelle());
        p.setPrixUnitaire(produit.getPrixUnitaire());
        p.setCategorie(produit.getCategorie());
        p.setEtagere(produit.getEtagere());
        produitRepository.save(p);
        return new ResponseEntity<>(p, HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteProduit(Long id) {
        Produit p = produitRepository.findById(id).get();
        if (p == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        produitRepository.delete(p);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public static List<Produit> excelToProduits(InputStream is) {
        List<Produit> produits = new ArrayList<>();
        try {
            Workbook workbook = new XSSFWorkbook(is);
            Sheet sheet = workbook.getSheetAt(0);
            Iterator<Row> rows = sheet.iterator();
            boolean isFirstRow = true;

            while (rows.hasNext()) {
                Row row = rows.next();
                if (isFirstRow) { isFirstRow = false; continue; } // skip header

                Produit produit = new Produit();
                produit.setCode(row.getCell(0).getStringCellValue());
                produit.setLibelle(row.getCell(1).getStringCellValue());
                produit.setPrixUnitaire(String.valueOf(row.getCell(2).getNumericCellValue()));

                // À adapter : charger Categorie et Etagere à partir d’un service
                long categorieId = (long) row.getCell(3).getNumericCellValue();
                long etagereId = (long) row.getCell(4).getNumericCellValue();

                // assigner des objets fictifs ou en base
                Categorie categorie = new Categorie();
                categorie.setId(categorieId);
                produit.setCategorie(categorie);

                Etagere etagere = new Etagere();
                etagere.setId(etagereId);
                produit.setEtagere(etagere);

                produits.add(produit);
            }

            workbook.close();
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la lecture du fichier Excel: " + e.getMessage());
        }

        return produits;
    }

    public void saveAll(List<Produit> produits) {
        produitRepository.saveAll(produits);
    }

}
