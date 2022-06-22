
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDividerModule, MatIconModule,
  MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';







@NgModule({
  declarations: [	AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   // AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CdkTableModule,
    CdkTreeModule,
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
