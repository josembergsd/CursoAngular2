import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void{
  //  this.foodList = this.foodListService.foodList();

    this.foodListService.foodList().subscribe({
      next: (res: FoodList[]) => this.foodList = res,
      error: (err: any) => console.log(err)
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: any) => {
        alert(`Olha você add => ${res.nome}`)
        return this.foodList.push(res)
      },
      error: (err: any) => alert(`Erro ao inserir item: ${err}`),
    });
  }

  public foodListEdit(value: string, id:number){
    this.foodListService.foodListEdit(value, id).subscribe({
      next: (res: any) => {
        return console.log(res)
      },
      error: (error: any) => error
   });
  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe({
      next: res => {
        return this.foodList = this.foodList.filter(
          item => {
            return id !== item.id;
          }
        )
      },
      error: err => console.log(err)
    });
  }

}
