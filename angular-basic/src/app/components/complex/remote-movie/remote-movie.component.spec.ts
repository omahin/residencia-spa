import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteMovieComponent } from './remote-movie.component';

describe('RemoteMovieComponent', () => {
  let component: RemoteMovieComponent;
  let fixture: ComponentFixture<RemoteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
