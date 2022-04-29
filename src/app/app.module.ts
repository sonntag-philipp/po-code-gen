import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppIndexComponent } from './app-index/app-index.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { CodeTextViewerComponent } from './code-text-viewer/code-text-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIndexComponent,
    CodeTextViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    // Angular Material modules
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
