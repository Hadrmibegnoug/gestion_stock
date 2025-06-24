import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagereUpdateComponent } from './etagere-update.component';

describe('EtagereUpdateComponent', () => {
  let component: EtagereUpdateComponent;
  let fixture: ComponentFixture<EtagereUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtagereUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagereUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
