import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: CrudService) { }
  usersInfo: any;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (res)=> {
        this.usersInfo = res;
        
      },
      (error)=> {
        console.log('error:: ', error);
      },
    )


  }

}
