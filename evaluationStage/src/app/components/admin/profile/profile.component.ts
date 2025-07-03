import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  // Define any properties or methods needed for the profile component
  constructor(public authService:AuthService) {}
  ngOnInit(): void {
    // Logic to fetch and display user profile information
    console.log('Profile component initialized');
  }

  // Add methods to handle profile updates, etc.

}
