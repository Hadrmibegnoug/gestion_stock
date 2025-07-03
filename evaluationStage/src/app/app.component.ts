import { Component, computed, HostListener, input, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from "./components/shared/left-sidebar/left-sidebar.component";
import { MainComponent } from "./components/shared/main/main.component";
import { LoginComponent } from "./components/shared/login/login.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule,
    //  LeftSidebarComponent,
    //  MainComponent,
     RouterOutlet,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
