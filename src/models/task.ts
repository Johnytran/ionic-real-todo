export class Task{
  name: string;
  created:string;
  status:boolean;
  constructor(taskname){
    this.name = taskname;
    this.created = (new Date().getTime()).toString();
    this.status = false;
  }
}
