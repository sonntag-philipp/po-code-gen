import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppIndexComponent } from './app-index/app-index.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AppIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
