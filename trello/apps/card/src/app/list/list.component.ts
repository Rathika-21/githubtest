import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { addCard, addList } from '../store/action';
import { organizeTaskState } from '../store/reducer';

@Component({
  selector: 'trello-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private store: Store<{ Reducer: organizeTaskState }>) { }
 public taskList:any;
 public cardList:any;
  ngOnInit(): void {
    console.log(this.store);
    // this.store.select('Reducer').subscribe(x => {
    //   console.log(x);
    //   this.taskList = x.todoList;

    // });
   
  }
  containers: any = [];
  addtask = new FormControl("", Validators.required);
  addlist = new FormControl("", Validators.required);
  add() {
    if(this.addtask.value.trim()){
      let payload = {
        title: this.addtask.value,
       [this.addtask.value] : []
       }
      this.store.dispatch (addList({list:payload}))
      this.store.select('Reducer').subscribe(x => {
        console.log(x);
        this.taskList = x.todoList;
  
      });
    }
    
    this.addtask.reset();
  }
  addcard(titlename:string){
    if(this.addlist.value.trim()){
    let payload = {
      title: titlename,
      cardname : this.addlist.value
     }
     this.store.dispatch (addCard({card:payload}))
     this.store.select('Reducer').subscribe(x => {
      console.log("LIST",x);
      this.cardList = x.todoList;

      
      this.addlist.reset();

    });
  }
  }
 
}
