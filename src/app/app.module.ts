import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
