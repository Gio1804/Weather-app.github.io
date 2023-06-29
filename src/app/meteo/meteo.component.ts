import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rome } from '../model/rome.model';
import { London } from '../model/london.model';
import { Paris } from '../model/paris.model';
import { Dublin } from '../model/dublin.model';
import { Tokyo } from '../model/tokyo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  r!: Rome;
  l!: London;
  p!: Paris;
  d!: Dublin;
  t!: Tokyo

  constructor(private router: Router,private http: HttpClient) {

  }
  ngOnInit() {
    this.getRome()
    this.getLondon()
    this.getParis()
    this.getDublin()
    this.getTokyo()
  }

  getRome(): void {
    this.http.get<Rome>('https://api.openweathermap.org/data/2.5/weather?q=Rome,it&units=metric&APPID=cb5d3d24cc2dc36770dcf60ded8c0e5c')
      .subscribe(r => {
        this.r = r
        console.log(r)
      })
  }

  getLondon(): void {
    this.http.get<London>('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=cb5d3d24cc2dc36770dcf60ded8c0e5c')//'request=name='+name+'&base='+base
      .subscribe(l => {
        this.l = l
        console.log(l)
      })
  }

  getParis(): void {
    this.http.get<Paris>('https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&units=metric&APPID=cb5d3d24cc2dc36770dcf60ded8c0e5c')
      .subscribe(p => {
        this.p = p;
        console.log(p)

      })
  }

  getDublin(): void {
    this.http.get<Dublin>('https://api.openweathermap.org/data/2.5/weather?q=Dublin,ie&units=metric&APPID=cb5d3d24cc2dc36770dcf60ded8c0e5c')
      .subscribe(d => {
        this.d = d;
        console.log(d)
      })
  }

  getTokyo(): void {
    this.http.get<Tokyo>('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&APPID=cb5d3d24cc2dc36770dcf60ded8c0e5c')
      .subscribe(t => {
        this.t = t;
        console.log(t)
      })
  }

}
