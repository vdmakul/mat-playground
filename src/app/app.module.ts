import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatTableModule, MatToolbarModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { ResultsComponent } from './results/results.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { ResultRowComponent } from './results-table/result-row/result-row.component';
import { MdlResultsComponent } from './mdl-results/mdl-results.component';
import { MdlResultRowComponent } from './mdl-results/mdl-result-row/mdl-result-row.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ResultsTableComponent,
    ResultRowComponent,
    MdlResultsComponent,
    MdlResultRowComponent
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
