import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tela1Page } from './tela1.page';

describe('Tela1Page', () => {
  let component: Tela1Page;
  let fixture: ComponentFixture<Tela1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
