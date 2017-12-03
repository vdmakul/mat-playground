import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatTableModule, MatToolbarModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { ResultsComponent } from './results/results.component';
import { ResultsTableComponent } from './results-table/results-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ResultsTableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
