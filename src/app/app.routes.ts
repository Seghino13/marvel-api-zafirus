import { Routes } from '@angular/router';
import { DetailComponent } from './core/presentation/detail/detail.component';
import { HomePage } from './core/presentation/home/home.page';


export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, 
  { path: 'home', component: HomePage },
  { path: 'detail/:id', component: DetailComponent },
];
