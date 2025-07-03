import { AuthService } from './../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    // Initialization logic can go here
    this.formGroup = this.fb.group({
      login: this.fb.control(""),
      password: this.fb.control("")
    });
  }
  onSubmit(){
    console.log(this.formGroup.value);
    let login = this.formGroup.value.login;
    let password = this.formGroup.value.password;
    this.authService.login(login, password).subscribe({
      next: (response) => {
        console.log("Login successful", response);
        this.authService.loadProdile(response);
        this.router.navigateByUrl("/admin/home"); // Redirect to home page after successful login
        // Handle successful login, e.g., redirect to home page
      }
      , error: (error) => {
        console.error("Login failed", error);
        // Handle login failure, e.g., show an error message
      }
    });
  }

}
