import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataviewComponent } from './dataview/dataview.component';


const routes: Routes = [
  { path: 'data-view', component: DataviewComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
