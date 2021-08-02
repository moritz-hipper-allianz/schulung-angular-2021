import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Testpizzaheader';

  pizzaMenueItems = ["Salami", "Qattro Stagioni", "Vier Käse", "Schinken", "Champignion"];
}
