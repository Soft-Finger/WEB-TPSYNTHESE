import { Component, OnInit } from '@angular/core';
import { Employee } from './../../../models/employee';
import { EmployeeService } from './../../../services/employee.service';
import { User2 } from './../../user2';
import { User2Service } from './../../../services/user2.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listUser: Array<User2>;
  public headElements = ['ID', 'FirstName', 'LastName', 'Email', 'Country', 'Newsletter', 'Actions'];

  constructor(private service: User2Service) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers():void{
    this.service.getAll().subscribe(res => {
    this.listUser = res;
    }, (err) => {
      console.log(err);
  }); 
  }

  public delete(id:number) {
    if(window.confirm('Etes-vous sur de vouloir effectuer cette suppression ?')) {
      this.service.deleteById(id).subscribe(res => {
      this.listUser = this.listUser.filter(record => record.id !== id);
      }, (err) => {
        console.log(err);
      })
    }
  }

public delete2(id: number, i: any) {
  if(window.confirm('Etes-vous sur de vouloir effectuer cette suppression ?')) {
    this.service.deleteById(id).subscribe(res => {
      this.listUser.splice(i, 1);
    }, (err) => {
      console.log(err);
    })
  }
}

}