import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


 dolar = 0
 real = 0
 calc = 0

  somar (){
    this.calc=this.real/this.dolar;
  }
}
