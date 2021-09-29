import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMovieComponent } from './editar-movie.component';

describe('EditarMovieComponent', () => {
  let component: EditarMovieComponent;
  let fixture: ComponentFixture<EditarMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
