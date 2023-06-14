import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./css/principal.component.css', './css/banner/principal-banner.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  public redirecinarParaIngresso():void{
    this.route.navigate(['/ingresso']);
  }

}
