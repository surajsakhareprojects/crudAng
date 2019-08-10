import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor( private userService: CrudService, private router: Router) { }

  ngOnInit() {
  }

  submitform(newUser: any){
    console.log('newUser:: ', newUser);

    this.userService.newUser(newUser).subscribe(
      (res)=> {
        alert('You have created new user successfully');
        this.router.navigate(['/users']);
      },
      (error)=> {
        console.log('error:: ', error);
      },
    )
  }

}
