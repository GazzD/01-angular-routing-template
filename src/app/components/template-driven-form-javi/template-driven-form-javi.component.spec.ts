import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormJaviComponent } from './template-driven-form-javi.component';

describe('TemplateDrivenFormJaviComponent', () => {
  let component: TemplateDrivenFormJaviComponent;
  let fixture: ComponentFixture<TemplateDrivenFormJaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormJaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormJaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
