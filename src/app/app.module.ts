import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlocComponent } from './bloc/bloc.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocComponent,
    CalculatriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
