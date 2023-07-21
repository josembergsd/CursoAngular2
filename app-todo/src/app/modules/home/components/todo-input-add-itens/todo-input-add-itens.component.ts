import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public additemTaskList: string = "";


  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public submitItemTaskList() {
    this.additemTaskList = this.additemTaskList.trim();
    if(this.additemTaskList){
      this.emitItemTaskList.emit(this.additemTaskList);
      this.additemTaskList = "";
    }
  }
}
