package ma.sagim.pfe.controller;

import ma.sagim.pfe.model.Produit;
import ma.sagim.pfe.services.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

}
