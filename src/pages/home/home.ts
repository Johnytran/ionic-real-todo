import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task } from '../../models/task';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList:Array<Task> = [];
  newtask:string;
  constructor(public navCtrl: NavController) {

  }
  addNewTask(){
    if(this.newtask.trim().length >0){
      let t = new Task(this.newtask);
      this.taskList.push(t);
      this.newtask = '';
    }


  }

}
