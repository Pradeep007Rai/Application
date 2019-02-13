import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'aboutus',
      component: AboutusComponent
    },
    {
      path: 'homepage',
      component: HomeComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
