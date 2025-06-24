package ma.sagim.pfe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;
@Entity
public class Etagere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;


    private String libelle;

    @OneToMany(mappedBy = "etagere", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Produit> produits;

    public Etagere(){super();}

    public Etagere(String code, String libelle, List<Produit> produits) {
        this.code = code;
        this.libelle = libelle;
    }
    public Etagere(Long id, String code, String libelle, List<Produit> produits) {
        this.id = id;
        this.code = code;
        this.libelle = libelle;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<Produit> getProduits() {
        return produits;
    }

    public void setProduits(List<Produit> produits) {
        this.produits = produits;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
}

