    package ma.sagim.pfe.services;


    import ma.sagim.pfe.model.Produit;
    import ma.sagim.pfe.repositories.ProduitRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.stereotype.Service;

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
    }
