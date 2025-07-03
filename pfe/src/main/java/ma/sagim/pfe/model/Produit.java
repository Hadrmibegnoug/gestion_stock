package ma.sagim.pfe.model;
import jakarta.persistence.*;
@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String libelle;
    private String prixUnitaire;
    @ManyToOne
    private Categorie categorie;
    @ManyToOne
    private Etagere etagere;
    public Produit(){super();}
    public Produit(Long id, String libelle, String code, String prixUnitaire){
        super();
        this.id = id;
        this.libelle = libelle;
        this.code = code;
        this.prixUnitaire = prixUnitaire;
    }

    public Produit(Long id, String libelle, String code, String prixUnitaire, Categorie categorie, Etagere etagere) {
        super();
        this.id = id;
        this.libelle = libelle;
        this.code = code;
        this.prixUnitaire = prixUnitaire;
        this.categorie = categorie;
        this.etagere = etagere;
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

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getPrixUnitaire() {
        return prixUnitaire;
    }

    public void setPrixUnitaire(String prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Etagere getEtagere() {
        return etagere;
    }

    public void setEtagere(Etagere etagere) {
        this.etagere = etagere;
    }
}

