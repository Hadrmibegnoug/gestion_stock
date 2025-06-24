import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagereFormComponent } from './etagere-form.component';

describe('EtagereFormComponent', () => {
  let component: EtagereFormComponent;
  let fixture: ComponentFixture<EtagereFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtagereFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagereFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
