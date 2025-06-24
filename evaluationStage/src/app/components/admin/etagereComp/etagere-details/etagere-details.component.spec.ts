import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtagereDetailsComponent } from './etagere-details.component';

describe('EtagereDetailsComponent', () => {
  let component: EtagereDetailsComponent;
  let fixture: ComponentFixture<EtagereDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtagereDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtagereDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
