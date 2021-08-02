import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { PizzaVorschauComponent } from './components/pizza-vorschau/pizza-vorschau.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    PizzaVorschauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
