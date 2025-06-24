import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { ProduitServiceService } from '../../../../services/produit-service.service';
import { Router } from '@angular/router';
import { CategorieServiceService } from '../../../../services/categorie-service.service';
import { EtagereServiceService } from '../../../../services/etagere-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatTableModule, MatButtonModule],
  templateUrl: './produit-form.component.html',
  styleUrl: './produit-form.component.css'
})
export class ProduitFormComponent implements OnInit {
  form: FormGroup;
  categories: any[] = [];
  etageres: any[] = [];

  constructor(private fb: FormBuilder, private produitServiceService:ProduitServiceService, private router: Router, private categorieService: CategorieServiceService, private etagereService: EtagereServiceService) {
    this.form = this.fb.group({
      code: [''],
      libelle: [''],
      prixUnitaire: [''],
      categorieId: [''],
      etagereId: ['']
    })
  }

  ngOnInit() {
    this.categorieService.getCategories().subscribe(dataCategorie => {
      console.log('Catégories reçues :', dataCategorie);
      this.categories = dataCategorie;
    });

    this.etagereService.getEtageres().subscribe(dataEtagere => {
      console.log('Etagères reçues :', dataEtagere);
      this.etageres = dataEtagere;
    });
  }

  submit(){
    const data = this.form.value;
    console.log(`Data du formulaire: ${data}`)
    console.log(`Code : ${data.code}`)
    console.log(`Libelle : ${data.libelle}`)
    console.log(`Prix Unitaire : ${data.prixUnitaire}`)
    console.log(`Categorie Id : ${data.categorieId}`)
    console.log(`Etagere Id : ${data.etagereId}`)
    const payload = {
        code: data.code,
        libelle: data.libelle,
        prixUnitaire: data.prixUnitaire,
        categorie: { id: data.categorieId },
        etagere: { id: data.etagereId }
    };
    console.log(`Payload Envoyé: ${payload}`)
    this.produitServiceService.addProduit(payload).subscribe(
      (response) => {
        console.log(`Produit creé avec success: ${response}`)
        this.goToHome();
      },
      (error) => {
        console.log('Erreur lors de la création: ', error)
      }
    );
  }
  
  goToHome(){
    this.router.navigate(['/home'])
  }

}
