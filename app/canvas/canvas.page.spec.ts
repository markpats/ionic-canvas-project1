import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CanvasPage } from './canvas.page';

describe('CanvasPage', () => {
  let component: CanvasPage;
  let fixture: ComponentFixture<CanvasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
