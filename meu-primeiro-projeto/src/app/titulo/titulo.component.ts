import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})

export class TituloComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public titulo:string = "Component - Bem vindo!";

  constructor() {}
  ngOnDestroy(): void {
    console.log("Deu bom ele foi destruído!")
  }

  ngOnInit(): void {}
  ngOnChanges(): void {}

}
