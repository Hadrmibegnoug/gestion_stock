import { CategorieServiceService } from './../../../../services/categorie-service.service';
import { Component, OnInit } from '@angular/core';
import { CategorieModel } from '../../../../models/categorieModel/categorie-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit {

  id: number = 0;
  category: CategorieModel = new CategorieModel();

  constructor(private categorieService:CategorieServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.categorieService.getCategorieById(this.id).subscribe(
      (response: CategorieModel) => {
        this.category = response;
        console.log(`${this.category}`);
      },
      (error) => {
        console.error('erreur : ', error)
      }
    );
  }
}
