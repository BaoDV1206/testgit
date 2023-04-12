import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomedasboardComponent } from './wellcomedasboard.component';

describe('WellcomedasboardComponent', () => {
  let component: WellcomedasboardComponent;
  let fixture: ComponentFixture<WellcomedasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomedasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellcomedasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
