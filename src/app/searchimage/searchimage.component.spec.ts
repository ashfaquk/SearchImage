import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchimageComponent } from './searchimage.component';

describe('SearchimageComponent', () => {
  let component: SearchimageComponent;
  let fixture: ComponentFixture<SearchimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
