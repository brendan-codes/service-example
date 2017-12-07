import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' // <-- make sure you have HttpClientModule
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // <---- HttpCLIENTCLIENTCLIENT not just Http
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
