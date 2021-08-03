import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizza-vorschlag',
  templateUrl: './pizza-vorschlag.component.html',
  styleUrls: ['./pizza-vorschlag.component.scss']
})
export class PizzaVorschlagComponent implements OnInit {

  public vorschlagForm = new FormGroup({
    name: new FormControl('Salami', [Validators.required, Validators.minLength(5)]),
    beschreibung: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
  }

}
