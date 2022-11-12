import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEmbaucheComponent } from './cv-embauche.component';

describe('CvEmbaucheComponent', () => {
  let component: CvEmbaucheComponent;
  let fixture: ComponentFixture<CvEmbaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvEmbaucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
