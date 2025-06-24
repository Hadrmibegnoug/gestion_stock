import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-import',
  templateUrl: './produit-import.component.html',
  styleUrls: ['./produit-import.component.css']
})
export class ProduitImportComponent {
  selectedFile?: File;

  constructor(private http: HttpClient, private router: Router) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8098/api/produits/upload', formData)
      .subscribe({
        next: (res) =>{
          console.log('Réponse du serveur:', res);
          this.router.navigate(['home']);
        },
        error: (err) => {
          console.error('Erreur lors de l\'importation du fichier:', err);
        }
      });
  }
}
