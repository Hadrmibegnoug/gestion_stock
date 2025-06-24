import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitImportComponent } from './produit-import.component';

describe('ProduitImportComponent', () => {
  let component: ProduitImportComponent;
  let fixture: ComponentFixture<ProduitImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
