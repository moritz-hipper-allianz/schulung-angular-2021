import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menue-page',
  templateUrl: './menue-page.component.html',
  styleUrls: ['./menue-page.component.scss']
})
export class MenuePageComponent implements OnInit {

  pizzaMenueItems = [
    {
      name: "Salami",
      isDailySpecial: false
    },
    {
      name: "Qattro Stagioni",
      isDailySpecial: true
    },
    {
      name: "Vier Käse",
      isDailySpecial: false
    },
    {
      name: "Schinken",
      isDailySpecial: false
    },
    {
      name: "Champignion",
      isDailySpecial: false
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
