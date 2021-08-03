import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuePageComponent } from './pages/menue-page/menue-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VorschlagPageComponent } from './pages/vorschlag-page/vorschlag-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menue',
    pathMatch: 'full'
  },
  {
    path: 'menue',
    component: MenuePageComponent
  },
  {
    path: 'vorschlag',
    component: VorschlagPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
