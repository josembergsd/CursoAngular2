import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade:number}> = [
    {nome: "Josemberg", idade: 48},
    {nome: "Luciana", idade: 40},
    {nome: "Ian lucas", idade: 13},
    {nome: "Analú", idade: 10}
  ]


  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }

}
