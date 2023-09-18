import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ArrastaSoltaComponent } from './arrasta-solta.component';

describe('ArrastaSoltaComponent', () => {
  let component: ArrastaSoltaComponent;
  let fixture: ComponentFixture<ArrastaSoltaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ArrastaSoltaComponent],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrastaSoltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
