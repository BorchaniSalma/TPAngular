import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetailsComponentComponent } from './cv-details-component.component';

describe('CvDetailsComponentComponent', () => {
  let component: CvDetailsComponentComponent;
  let fixture: ComponentFixture<CvDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
