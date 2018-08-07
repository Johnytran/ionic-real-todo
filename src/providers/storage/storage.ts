import { Injectable } from '@angular/core';
import { Task } from '../../models/task';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor() {
    console.log('Hello StorageProvider Provider');
  }

  storeData(data:Array<Task>){
    window.localStorage.setItem('data', JSON.stringify(data));
  }
  readData(){
    try{
      let data = JSON.parse(window.localStorage.getItem('data'));
      return data;
    }catch(error){
      console.log(error);
      return null;
    }
  }
}
