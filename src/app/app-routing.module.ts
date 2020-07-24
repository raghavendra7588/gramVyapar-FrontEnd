import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { LegalComponent } from './layout/legal/legal.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }, {
    path: 'home', component: BodyComponent
  },
  {
    path: 'legal', component: LegalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
