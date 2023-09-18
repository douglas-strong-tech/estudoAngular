import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { ArvoreComponent } from './arvore.component';

describe('ArvoreComponent', () => {
  let component: ArvoreComponent;
  let fixture: ComponentFixture<ArvoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArvoreComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
