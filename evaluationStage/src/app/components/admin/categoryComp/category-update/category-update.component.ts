import { CategorieServiceService } from './../../../../services/categorie-service.service';
import { Component, OnInit } from '@angular/core';
import { CategorieModel } from '../../../../models/categorieModel/categorie-model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent implements OnInit {

  id: number = 0;
  category: CategorieModel = new CategorieModel();

  constructor(private categorieService:CategorieServiceService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.categorieService.getCategorieById(this.id).subscribe(
      (response: CategorieModel) => {
        this.category = response;
        console.log(this.category);
      },
      (error) => {
        console.error(`error fetching category: ${error}`)
      }
    );
  }
  onSubmit() {
    console.log("Formulaire soumit");
    console.log(this.category);
    this.updateCategory();
  }
  updateCategory() {
    this.categorieService.updateCategorie(this.id, this.category).subscribe(
      (response: CategorieModel) => {
        console.log(`Catégorie modifiée avec succès: ${response}`);
        this.goToHome();
      },
      (error) => {
        console.error(`Erreur de modification de la catégorie: ${error}`);
      }
    );
  }
  goToHome() {
    this.router.navigate(['admin/category']);
  }

}
