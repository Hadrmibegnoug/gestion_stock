package ma.sagim.pfe.repositories;

import ma.sagim.pfe.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
}
