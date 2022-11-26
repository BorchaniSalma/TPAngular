import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteImagesComponent } from './suite-images.component';

describe('SuiteImagesComponent', () => {
  let component: SuiteImagesComponent;
  let fixture: ComponentFixture<SuiteImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
