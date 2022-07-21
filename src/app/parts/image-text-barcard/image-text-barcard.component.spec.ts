import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextBarcardComponent } from './image-text-barcard.component';

describe('ImageTextBarcardComponent', () => {
  let component: ImageTextBarcardComponent;
  let fixture: ComponentFixture<ImageTextBarcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTextBarcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextBarcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
