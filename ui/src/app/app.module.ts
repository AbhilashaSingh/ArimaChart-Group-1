import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataviewComponent } from './dataview/dataview.component';
import { DataviewService } from './dataview/dataview.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadModule } from './upload/upload.module';

@NgModule({
  declarations: [
    AppComponent,
    DataviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UploadModule
  ],
  providers: [DataviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
