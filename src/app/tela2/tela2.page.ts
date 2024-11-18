import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {

  op: string | null = null
  total: number  | null = null
  qtd: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe
      this.op = this.route.snapshot.queryParamMap.get('pop');
    }

  }


