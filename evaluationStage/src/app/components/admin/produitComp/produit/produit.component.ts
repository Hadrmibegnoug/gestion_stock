import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ProduitModel } from '../../../../models/produitModel/produit-model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProduitServiceService } from '../../../../services/produit-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produit',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit {
  produit: ProduitModel[] = [];
  constructor(public authService: AuthService, private produitService: ProduitServiceService, private router: Router) {}
    // Initialize the produit array or fetch data from a service if needed
  ngOnInit(): void {
    this.getProduits();
  }
  getProduits(): void {
    this.produitService.getProduits().subscribe(
      (response: ProduitModel[]) => {
        this.produit = response;
        console.log(this.produit);
      },
      (error) => {
        console.error('Error fetching Produits:', error);
      }
    );
  }

  deleteProduit(id: number): void {
    console.log('Delete produit with ID:', id);
    this.produitService.deleteProduit(id).subscribe(
      (response) => {
        console.log(`Produit with ID ${id} deleted successfully:`, response);
        // Optionally, you can refresh the list of produits after deletion
        this.getProduits();
      },
      (error) => {
        console.error('Error deleting produit:', error);
      }
    );
  }
  editProduit(id: number): void {
    console.log('Edit produit with ID:', id);
    this.router.navigate(['admin/produit', id]);
  }
  detailsProduit(id: number): void {
    console.log('View details of produit with ID:', id);
    this.router.navigate(['admin/produit/produitDetails/', id]);
  }
  addProduit(): void {
    console.log('Add new produit');
    this.router.navigate(['admin/produit/addProduit']);
  }
}
