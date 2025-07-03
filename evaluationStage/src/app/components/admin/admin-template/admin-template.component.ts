import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { LeftSidebarComponent } from '../../shared/left-sidebar/left-sidebar.component';
import { MainComponent } from '../../shared/main/main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-template',
  imports: [
    CommonModule,
    LeftSidebarComponent,
    MainComponent
  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
  title = 'evaluationStage';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
