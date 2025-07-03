import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    // Logic to handle logout, e.g., clearing user session, redirecting to login page
    console.log('User logged out');
    this.logout();
    this.router.navigateByUrl('/login'); 
  }

  logout(){
    this.authService.isAuthenticated = false;
    this.authService.accessToken = undefined;
    this.authService.username = undefined;
    this.authService.roles = undefined;
  }

}
