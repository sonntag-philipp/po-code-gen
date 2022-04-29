import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppIndexComponent } from './app-index/app-index.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeTextViewerComponent } from './code-text-viewer/code-text-viewer.component';
import { SelectorListEntryComponent } from './selector-list-entry/selector-list-entry.component';

@NgModule({
  declarations: [AppComponent, AppIndexComponent, CodeTextViewerComponent, SelectorListEntryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    // Angular Material modules
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
