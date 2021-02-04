import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIteamComponent } from './menu-iteam.component';

describe('MenuIteamComponent', () => {
  let component: MenuIteamComponent;
  let fixture: ComponentFixture<MenuIteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
