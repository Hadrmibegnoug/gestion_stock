import { routes } from './../../../../app.routes';
import { EtagereServiceService } from './../../../../services/etagere-service.service';
import { Form, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtagereModel } from '../../../../models/etagereModel/etagere-model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-etagere-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './etagere-update.component.html',
  styleUrl: './etagere-update.component.css'
})
export class EtagereUpdateComponent implements OnInit {

  id: number = 0;
  etgere: EtagereModel = new EtagereModel();

  constructor(private etagereService:EtagereServiceService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(`ID de l'étagère récupéré: ${this.id}`);
    });
    this.etagereService.getEtagereById(this.id).subscribe(
      (response: EtagereModel) => {
        this.etgere = response;
        console.log(this.etgere);
      },
      (error) => {
        console.error(`error fetching etagere: ${error}`)
      }
    );
  }

  onSubmit() {
    console.log("Formulaire soumit");
    console.log(this.etgere);
    this.updateEtagere();
  }
  updateEtagere() {
    this.etagereService.updateEtagere(this.id, this.etgere).subscribe(
      (response: EtagereModel) => {
        console.log(`Etagere modifiée avec succès: ${response}`);
        this.goToHome();
      },
      (error) => {
        console.error(`Erreur de modification de l'étagère: ${error}`);
      }
    );
  }
  goToHome() {
    this.router.navigate(['admin/etagere']);
  }
}
