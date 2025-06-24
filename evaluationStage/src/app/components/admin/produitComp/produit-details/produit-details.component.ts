import { ProduitServiceService } from './../../../../services/produit-service.service';
import { Component } from '@angular/core';
import { ProduitModel } from '../../../../models/produitModel/produit-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-details',
  imports: [],
  templateUrl: './produit-details.component.html',
  styleUrl: './produit-details.component.css'
})
export class ProduitDetailsComponent {

  id: number = 0;
  produit: ProduitModel = new ProduitModel();

  constructor(private produitService:ProduitServiceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.produitService.getProduitById(this.id).subscribe(
      (response: ProduitModel) => {
        this.produit = response;
        console.log(`${this.produit}`);
      },
      (error) => {
        console.error('erreur : ', error)
      }
    );
  }


}
