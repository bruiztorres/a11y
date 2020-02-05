import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkTaskComponent } from './social-network-task.component';

describe('SocialNetworkTaskComponent', () => {
  let component: SocialNetworkTaskComponent;
  let fixture: ComponentFixture<SocialNetworkTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
