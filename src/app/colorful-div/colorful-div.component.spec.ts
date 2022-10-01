import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulDivComponent } from './colorful-div.component';

describe('ColorfulDivComponent', () => {
  let component: ColorfulDivComponent;
  let fixture: ComponentFixture<ColorfulDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorfulDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
