import { task } from '../../interfaces/task.interface';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';


@Component({
  selector: 'app-walid',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class taskComponent implements OnInit {

  updateactive : boolean = false;

  listOftasks : task[] = [];

  newtaskForm  : task = {
    name : "" ,
    complited : false
  }

  numberoftasks : number = this.listOftasks.length;

  constructor() { }

  ngOnInit(): void {
    this.listOftasks = [...JSON.parse(localStorage.getItem("listTasks"))];
    this.numberoftasks = this.listOftasks.length;
    this.numberofcomplitedtaskfun();
  }

  changeStatusComplitedtask = (index) => {
    this.listOftasks[index].complited = !this.listOftasks[index].complited;
    this.numberofcomplitedtaskfun();
    localStorage.setItem("listTasks" , JSON.stringify(this.listOftasks));
    swal.fire('génial' , 'task complited' , 'success');
  }

  addtask = () => {
    this.listOftasks.push(this.newtaskForm);
    this.newtaskForm = {
      name : "" ,
      complited : false
    }
    this.numberoftasks = this.listOftasks.length;
    swal.fire('good' , 'task bien ajouter' , 'success');
    localStorage.setItem("listTasks" , JSON.stringify(this.listOftasks));
  }

  indexActive : number;

  updatetask = (index) => {
    this.indexActive = index;
    this.updateactive = true;
    this.newtaskForm = this.listOftasks[index];
    localStorage.setItem("listTasks" , JSON.stringify(this.listOftasks));
  }

  updateitem = () => {
    this.listOftasks.splice(this.indexActive , 1 , this.newtaskForm);
    this.indexActive = null;
    this.updateactive = false;
    this.newtaskForm = {
      name : "" ,
      complited : false
    }
    swal.fire('good work' , 'task bien editer' , 'info');
    localStorage.setItem("listTasks" , JSON.stringify(this.listOftasks));
  }

  removetask = (index) => {
    this.listOftasks.splice(index , 1);
    swal.fire('Nice!' , 'task bien supprimer' , 'error');
    this.numberoftasks = this.listOftasks.length;
    localStorage.setItem("listTasks" , JSON.stringify(this.listOftasks));
    this.numberofcomplitedtaskfun();
  }


  numberoftaskcomplited : number = 0;

  numberofcomplitedtaskfun = () => {
    this.numberoftaskcomplited = 0;
    for(let i = 0 ; i < this.listOftasks.length ; i++){
      let item = this.listOftasks[i].complited;
      if(item) this.numberoftaskcomplited += 1;
    }
  }

}
