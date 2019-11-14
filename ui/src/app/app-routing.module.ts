import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataviewComponent } from './dataview/dataview.component';
import { UploadComponent } from './upload/upload.component';
import { DataviewResolver } from './dataview/dataview.resolver';


const routes: Routes = [
  { path: 'data-view', component: DataviewComponent, resolve: {data: DataviewResolver} },
  { path: 'upload', component: UploadComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
