import { CategorieServiceService } from './../../../../services/categorie-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EtagereServiceService } from '../../../../services/etagere-service.service';

@Component({
  selector: 'app-etagere-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './etagere-form.component.html',
  styleUrl: './etagere-form.component.css'
})
export class EtagereFormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private etagereService:EtagereServiceService, private router: Router){
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
    this.etagereService.addEtagere(payload).subscribe(
      (response) => {
        console.log(`Catégorie créée avec succès: ${response}`);
        this.goToHome();
      },
      (error) => {
        console.log('Erreur lors de la création: ', error);
      }
    );
  }
  goToHome() {
    this.router.navigate(['/etagere']);
  }

}
