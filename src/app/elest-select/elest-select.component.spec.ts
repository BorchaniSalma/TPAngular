import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElestSelectComponent } from './elest-select.component';

describe('ElestSelectComponent', () => {
  let component: ElestSelectComponent;
  let fixture: ComponentFixture<ElestSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElestSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElestSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
