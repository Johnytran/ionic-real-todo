import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task } from '../../models/task';
import { StorageProvider} from '../../providers/storage/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList:Array<Task> = [];
  newtask:string='';
  constructor(public navCtrl: NavController, public storage: StorageProvider) {
    if(this.storage.readData()){
      this.taskList = this.storage.readData();
    }
  }
  addNewTask(){
    if(this.newtask.trim().length >0){
      let t = new Task(this.newtask);
      this.taskList.push(t);
      this.newtask = '';
      this.storage.storeData(this.taskList);
    }
  }
  markAsDone(task){
    console.log(task);
    let created = task.created;
    this.taskList.forEach((task) => {
      if(task.created == created){
        if(task.status == true){
          task.status = false;
        }else{
          task.status = true;
        }
      }
    });
  }
}
