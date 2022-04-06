import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';
import { ComplexComponent } from './components/complex/complex.component';
import { MovieComponent } from './components/simple/movie/movie.component';
import { FactorialComponent } from './components/simple/factorial/factorial.component';
import { FormsModule } from '@angular/forms';
import { OutputComponent } from './components/simple/output/output.component';
import { RemoteMovieComponent } from './components/complex/remote-movie/remote-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SimpleComponent,
    ComplexComponent,
    MovieComponent,
    FactorialComponent,
    OutputComponent,
    RemoteMovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
