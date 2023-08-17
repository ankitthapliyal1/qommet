import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSuccesCallbackComponent } from './github-succes-callback.component';

describe('GithubSuccesCallbackComponent', () => {
  let component: GithubSuccesCallbackComponent;
  let fixture: ComponentFixture<GithubSuccesCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSuccesCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSuccesCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
