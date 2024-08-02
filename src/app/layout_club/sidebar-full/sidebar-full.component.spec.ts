import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFullComponent } from './sidebar-full.component';

describe('SidebarFullComponent', () => {
  let component: SidebarFullComponent;
  let fixture: ComponentFixture<SidebarFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
