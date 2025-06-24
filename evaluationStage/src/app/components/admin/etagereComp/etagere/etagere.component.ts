import { EtagereServiceService } from './../../../../services/etagere-service.service';
import { Component, OnInit } from '@angular/core';
import { EtagereModel } from '../../../../models/etagereModel/etagere-model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etagere',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './etagere.component.html',
  styleUrl: './etagere.component.css'
})
export class EtagereComponent implements OnInit {

  etgere: EtagereModel[] = [];

  constructor(private etagereService:EtagereServiceService, private router: Router){}


  ngOnInit(): void {
    this.getEtagere();
  }
  getEtagere(): void {
    this.etagereService.getEtageres().subscribe(
      (response: EtagereModel[]) => {
        this.etgere = response;
        console.log(this.etgere);
      },
      (error) => {
        console.error('Error fetching etagere:', error);
      }
    );
  }
  deleteEtagere(id: number): void {
    console.log('Delete etagere with ID:', id);
    this.etagereService.deleteEtagere(id).subscribe(
      (response: EtagereModel) => {
        console.log(`Etagere with ID ${id} deleted successfully:`, response);
        // Optionally, you can refresh the list of etagere after deletion
        this.getEtagere();
      },
      (error) => {
        console.error('Error deleting etagere:', error);
      }
    );
  }
  editEtagere(id: number): void {
    console.log('Edit etagere with ID:', id);
    this.router.navigate(['etagere', id]);
  }
  detailsEtagere(id: number): void {
    console.log('View details of etagere with ID:', id);
    this.router.navigate(['etagere/etagereDetails/', id]);
  }
  addEtagere(): void {
    console.log('Add new etagere');
    this.router.navigate(['etagere/form']);
  }

}
