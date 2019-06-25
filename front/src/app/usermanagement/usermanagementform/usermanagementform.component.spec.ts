import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementformComponent } from './usermanagementform.component';

describe('UsermanagementformComponent', () => {
  let component: UsermanagementformComponent;
  let fixture: ComponentFixture<UsermanagementformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagementformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
