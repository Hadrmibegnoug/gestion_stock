import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProduitModel } from '../../../../models/produitModel/produit-model';
import { ProduitServiceService } from './../../../../services/produit-service.service';
import { CategorieServiceService } from '../../../../services/categorie-service.service';
import { EtagereServiceService } from '../../../../services/etagere-service.service';
import { CategorieModel } from '../../../../models/categorieModel/categorie-model';
import { EtagereModel } from '../../../../models/etagereModel/etagere-model';

@Component({
  selector: 'app-produit-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produit-update.component.html',
  styleUrl: './produit-update.component.css'
})
export class ProduitUpdateComponent implements OnInit {

  id: number = 0;
  produit: ProduitModel = new ProduitModel();
  categories: CategorieModel[] = [];
  etageres: EtagereModel[] = [];
  categorieId: number = 0;
  etagereId: number = 0;
  isDataLoaded: boolean = false;

  constructor(
    private produitService: ProduitServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private categorieService: CategorieServiceService,
    private etagereService: EtagereServiceService
  ) {}

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe(categories => {
      this.categories = categories;

      this.etagereService.getEtageres().subscribe(etageres => {
        this.etageres = etageres;

        this.route.params.subscribe(params => {
          this.id = params['id'];
          this.produitService.getProduitById(this.id).subscribe(produit => {
            this.produit = produit;
            this.categorieId = produit.categorie?.id ?? 0;
            this.etagereId = produit.etagere?.id ?? 0;
            this.isDataLoaded = true;
          });
        });
      });
    });
  }

  onSubmit() {
    console.log("Formulaire soumis");
    console.log("categorieId:", this.categorieId);
    console.log("etagereId:", this.etagereId);
    console.log("categories:", this.categories);
    console.log("etageres:", this.etageres);

    const selectedCategorie = this.categories.find(c => c.id == this.categorieId);
    const selectedEtagere = this.etageres.find(e => e.id == this.etagereId);

    if (!selectedCategorie || !selectedEtagere) {
      console.error("Catégorie ou étagère introuvable !");
      return;
    }

    this.produit.categorie = selectedCategorie;
    this.produit.etagere = selectedEtagere;

    this.updateProduit();
  }

  updateProduit() {
    this.produitService.updateProduit(this.id, this.produit).subscribe(
      (updatedProduit: ProduitModel) => {
        console.log("Produit modifié avec succès :", updatedProduit);
        this.goToHome();
      },
      error => {
        console.error("Erreur lors de la modification :", error);
      }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
