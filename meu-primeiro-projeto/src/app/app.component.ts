import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-input [contador]="addValue"></app-input>
    <button (click)="add()"> add </button>

    <app-output (enviarDados)="setDados($event)"></app-output>
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <hr>
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <app-forms></app-forms>
    <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit{
  title = 'meu-primeiro-projeto';

  public destruir: boolean = true;
  public addValue: number = 1;
  public getDados: {nome: string, idade: number} | undefined

  constructor(){}
  ngOnInit(): void{}

  public add(){
    this.addValue += 1
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }
}
