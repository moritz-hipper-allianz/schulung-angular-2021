import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-vorschau',
  templateUrl: './pizza-vorschau.component.html',
  styleUrls: ['./pizza-vorschau.component.scss']
})
export class PizzaVorschauComponent implements OnInit {

  @Input() pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
