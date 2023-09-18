import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDialogoComponent } from './componente-dialogo.component';

describe('ComponenteDialogoComponent', () => {
  let component: ComponenteDialogoComponent;
  let fixture: ComponentFixture<ComponenteDialogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteDialogoComponent]
    });
    fixture = TestBed.createComponent(ComponenteDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
