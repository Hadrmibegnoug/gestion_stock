import { Component, OnInit } from '@angular/core';
import { CategorieModel } from '../../../../models/categorieModel/categorie-model';
import { CategorieServiceService } from '../../../../services/categorie-service.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  category: CategorieModel[] = [];

  constructor(private categoryService: CategorieServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: CategorieModel[]) => {
        this.category = response;
        console.log(this.category);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  deleteCategory(id: number): void {
    console.log('Delete category with ID:', id);
    this.categoryService.deleteCategorie(id).subscribe(
      (response: CategorieModel) => {
        console.log(`Category with ID ${id} deleted successfully:`, response);
        // Optionally, you can refresh the list of categories after deletion
        this.getCategories();
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }
  editCategory(id: number): void {
    console.log('Edit category with ID:', id);
    this.router.navigate(['category', id]);
  }
  detailsCategory(id: number): void {
    console.log('View details of category with ID:', id);
    this.router.navigate(['category/categoryDetails/', id]);
  }
  addCategory(): void {
    console.log('Add new category');
    this.router.navigate(['category/addCategory']);
  }

}
