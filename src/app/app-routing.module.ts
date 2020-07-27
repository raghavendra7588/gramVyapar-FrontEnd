import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { LegalComponent } from './layout/legal/legal.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }, {
    path: 'home', component: BodyComponent
  },
  {
    path: 'legal', component: LegalComponent
  }, {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
