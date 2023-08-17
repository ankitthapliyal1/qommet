import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyComponent } from './varify.component';

describe('VarifyComponent', () => {
  let component: VarifyComponent;
  let fixture: ComponentFixture<VarifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
