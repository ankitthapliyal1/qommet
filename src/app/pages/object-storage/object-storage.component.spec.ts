import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectStorageComponent } from './object-storage.component';

describe('ObjectStorageComponent', () => {
  let component: ObjectStorageComponent;
  let fixture: ComponentFixture<ObjectStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
