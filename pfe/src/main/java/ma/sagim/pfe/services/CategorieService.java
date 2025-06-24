package ma.sagim.pfe.services;

import ma.sagim.pfe.model.Categorie;
import ma.sagim.pfe.repositories.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {
    @Autowired
    private CategorieRepository categorieRepository;

    public List<Categorie> getCategories(){
        return categorieRepository.findAll();
    }
    public Categorie createCategorie(Categorie categorie){
        return categorieRepository.save(categorie);
    }

    public ResponseEntity<Categorie> getCategory(Long id){
        Categorie categorie = categorieRepository.findById(id).get();
        if ( categorie == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(categorie, HttpStatus.OK);
    }

    public ResponseEntity<Categorie> updateCategorie(Categorie categorie, Long id){
        Categorie c = categorieRepository.findById(id).get();
        if (c == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        c.setCode(categorie.getCode());
        c.setLibelle(categorie.getLibelle());
        categorieRepository.save(c);
        return new ResponseEntity<>(c, HttpStatus.OK);
    }

    public ResponseEntity<Void> deleteCategory(Long id){
        Categorie categorie = categorieRepository.findById(id).get();
        if (categorie == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        categorieRepository.delete(categorie);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
