import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextHorlCardComponent } from './image-text-horl-card.component';

describe('ImageTextHorlCardComponent', () => {
  let component: ImageTextHorlCardComponent;
  let fixture: ComponentFixture<ImageTextHorlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTextHorlCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextHorlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
