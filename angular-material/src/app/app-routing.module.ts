import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  { path: "", component: InputsComponent },
  { path: "navigation", component: NavigationComponent },
  { path: "forms", component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
