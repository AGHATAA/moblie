import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.page.html',
  styleUrls: ['./tela1.page.scss'],
})
export class Tela1Page implements OnInit {

  op: string | null = null
  total: number | null = null
  qtd: number | null = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.op =this.route.snapshot.queryParamMap.get('pop');
    const qtdStr =this.route.snapshot.queryParamMap.get('pqtd');
    const totalStr =this.route.snapshot.queryParamMap.get('ptotal');

    this.qtd = qtdStr ? parseInt(qtdStr, 10) : null; 
    this.total = totalStr ? parseFloat(totalStr) : null;
  }

}
