import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexComponent } from './components/complex/complex.component';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "componente1", component: SimpleComponent },
  { path: "componente2", component: ComplexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
