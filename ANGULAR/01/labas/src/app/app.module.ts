import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from 'card/card.component';
import { TwoColumnsComponent } from './two-columns/two-columns.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TwoColumnsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
