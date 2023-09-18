import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDialogoComponent } from './evento-dialogo.component';

describe('ComponenteDialogoComponent', () => {
  let component: EventoDialogoComponent;
  let fixture: ComponentFixture<EventoDialogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoDialogoComponent]
    });
    fixture = TestBed.createComponent(EventoDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
