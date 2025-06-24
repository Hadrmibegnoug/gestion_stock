import { CategorieServiceService } from './../../../../services/categorie-service.service';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieModel } from '../../../../models/categorieModel/categorie-model';

@Component({
  selector: 'app-category-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private categorieService:CategorieServiceService, private router: Router) {
    this.form = this.fb.group({
      code: [''],
      libelle: [''],
    });
  }

  submit() {
    const data = this.form.value;
    console.log(`Data du formulaire: ${data}`);
    console.log(`Code : ${data.code}`);
    console.log(`Libelle : ${data.libelle}`);
    const payload = data;

    console.log(`Payload Envoyé: ${payload}`);
    this.categorieService.addCategorie(payload).subscribe(
      (response: CategorieModel) => {
        console.log(`Catégorie créée avec succès: ${response}`);
        this.goToHome();
      },
      (error) => {
        console.log('Erreur lors de la création: ', error);
      }
    );
  }
  goToHome() {
    this.router.navigate(['/category']);
  }
}
