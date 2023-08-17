import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockStorageComponent } from './block-storage.component';

describe('BlockStorageComponent', () => {
  let component: BlockStorageComponent;
  let fixture: ComponentFixture<BlockStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
