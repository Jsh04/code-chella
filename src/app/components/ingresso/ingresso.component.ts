import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ingresso',
  templateUrl: './ingresso.component.html',
  styleUrls: ['./ingresso.component.css']
})
export class IngressoComponent implements OnInit {

  tiposSetores: string[] = [
    ''
  ]
  constructor() { }

  ngOnInit(): void {
  }

  pegarDadosFormulario(form: NgForm){
    console.log(form.controls)
  }
}
