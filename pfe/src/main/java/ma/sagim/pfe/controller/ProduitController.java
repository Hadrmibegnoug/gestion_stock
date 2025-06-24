package ma.sagim.pfe.controller;

import ma.sagim.pfe.model.Produit;
import ma.sagim.pfe.repositories.ProduitRepository;
import ma.sagim.pfe.services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/produits")
public class ProduitController {
    @Autowired
    private ProduitService produitService;

    @GetMapping
    public List<Produit> getProduits(){
        return produitService.getProduits();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduit(@PathVariable Long id){
        Produit produit = produitService.getProduit(id).getBody();
        return new ResponseEntity<>(produit, HttpStatus.OK);
    }

    @PostMapping
    public Produit createProduit(@RequestBody Produit produit){
        return produitService.createProduit(produit);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produit> updateProduit(@PathVariable Long id, @RequestBody Produit produit){
        Produit p = produitService.updateProduit(produit, id).getBody();
        return new ResponseEntity<>(p, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduit(@PathVariable Long id){
        produitService.deleteProduit(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadExcel(@RequestParam("file") MultipartFile file) {
        try {
            //List<Produit> produits = ProduitService.excelToProduits(file.getInputStream());
            //produitService.saveAll(produits);
            //return ResponseEntity.ok("Importation réussie de " + produits.size() + " produits.");
            List<Produit> produits = ProduitService.excelToProduits(file.getInputStream());
            produitService.saveAll(produits);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Importation réussie");
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erreur lors de l'import: " + e.getMessage());
        }
    }

}
