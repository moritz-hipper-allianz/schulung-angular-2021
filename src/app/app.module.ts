import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { PizzaVorschauComponent } from './components/pizza-vorschau/pizza-vorschau.component';
import { PizzaVorschlagComponent } from './components/pizza-vorschlag/pizza-vorschlag.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VorschlagPageComponent } from './pages/vorschlag-page/vorschlag-page.component';
import { MenuePageComponent } from './pages/menue-page/menue-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    PizzaVorschauComponent,
    PizzaVorschlagComponent,
    VorschlagPageComponent,
    MenuePageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
