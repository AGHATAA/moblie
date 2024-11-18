import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

op='';
qtd=0;
total=0;

  constructor(private navCtrl: NavController) {}

continuar(){

  if(!this.op || this.qtd <= 0 ){
    console.error('Por favor, selecione um quarto e insira a quantidade de dias.');
    return;
  }

if(this.op === 'Standard'){
  this.total = this.qtd * 806.00;
}
else if(this.op === 'Superior'){
  this.total = this.qtd * 1050.00;

}else if(this.op === 'Master'){
  this.total = this.qtd * 1500.00;

}else if(this.op === 'Luxo'){
  this.total = this.qtd * 2100.00;
}

this.navCtrl.navigateForward('tela1', {

  queryParams: {
    pop: this.op,
    pqtd: this.qtd,
    ptotal: this.total,

  },  
});
}
}
