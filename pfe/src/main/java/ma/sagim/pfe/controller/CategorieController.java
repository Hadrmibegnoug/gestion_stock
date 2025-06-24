package ma.sagim.pfe.controller;


import ma.sagim.pfe.model.Categorie;
import ma.sagim.pfe.services.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategorieController {
    @Autowired
    private CategorieService categorieService;

    @GetMapping
    public List<Categorie> getCategories(){
        return categorieService.getCategories();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categorie> getCategory(@PathVariable Long id){
        Categorie categorie = categorieService.getCategory(id).getBody();
        return new ResponseEntity<>(categorie, HttpStatus.OK);
    }

    @PostMapping
    public Categorie createCategorie(@RequestBody Categorie categorie){
        return categorieService.createCategorie(categorie);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categorie> updateCategorie(@PathVariable Long id, @RequestBody Categorie categorie){
        Categorie c = categorieService.updateCategorie(categorie, id).getBody();
        return new ResponseEntity<>(c, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Categorie> deleteCategorie(@PathVariable Long id){
        categorieService.deleteCategory(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
