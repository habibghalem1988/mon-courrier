import { Routes } from '@angular/router';
import { CListeComponent } from './pages/c-liste/c-liste.component';
import { CElementDetailsComponent } from './pages/c-element-details/c-element-details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'courrier-list',
    component: CListeComponent
  },
  {
    path:'courrier-details',
    component: CElementDetailsComponent
  },
];
