import { Component, OnInit } from '@angular/core';


 interface ClassRoom{
  ID:number;
  Name:string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  classroomsList: ClassRoom[] = [];

  constructor() {
    console.log("list page");
     this.getClassrooms();
   }

  ngOnInit() {
    console.log("List page");
    this.getClassrooms();
  }

  getClassrooms(){
    this.classroomsList = [
      {ID:1,Name:"Sham"},
      {ID:2,Name:"Sham"},
      {ID:3,Name:"Sham"},
      {ID:4,Name:"Sham"},
      {ID:5,Name:"Sham"},
      {ID:6,Name:"Sham"},
      {ID:7,Name:"Sham"}
    ];
  }

  showDetail(id:number){

  }




}
