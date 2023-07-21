import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = "Josemberg";
  public idade: number = 48;
  public imgSrc:string = "https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg";
  public imgTitle:string = "Respingo colorido";


  public checkedDisabled: boolean = false;
  public position: {x: number, y:number} = {x: 0, y: 0};

  constructor(){}

  public alertaInfo(valor: string){
    alert(valor);
  }

  public mouseMoveTeste(event: MouseEvent){
    // console.log(event);
    this.position.x = event.offsetX;
    this.position.y = event.offsetY;
  }

}
