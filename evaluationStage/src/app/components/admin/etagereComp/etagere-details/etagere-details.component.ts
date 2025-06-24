import { routes } from './../../../../app.routes';
import { EtagereServiceService } from './../../../../services/etagere-service.service';
import { Component, OnInit } from '@angular/core';
import { EtagereModel } from '../../../../models/etagereModel/etagere-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etagere-details',
  imports: [],
  templateUrl: './etagere-details.component.html',
  styleUrl: './etagere-details.component.css'
})
export class EtagereDetailsComponent implements OnInit {

  id: number = 0;
  etagere: EtagereModel = new EtagereModel();

  constructor(private etagereService:EtagereServiceService, private route: ActivatedRoute) {
    // You can initialize the etagere object or fetch it from a service if needed
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.etagereService.getEtagereById(this.id).subscribe(
      (response: EtagereModel) => {
        this.etagere = response;
        console.log(`${this.etagere}`);
      },
      (error) => {
        console.error('erreur : ', error)
      }
    );
  }

}
