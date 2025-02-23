import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPropertyFormComponent } from './dynamic-property-form.component';

describe('DynamicPropertyFormComponent', () => {
  let component: DynamicPropertyFormComponent;
  let fixture: ComponentFixture<DynamicPropertyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicPropertyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicPropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
