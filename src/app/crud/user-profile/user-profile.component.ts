import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private getparm: ActivatedRoute, private userService: CrudService, private router: Router) { }

  userInfo: any = {
    "fName": "",
    "lName": "",
    "email": "",
    "age": ''
  };
  deletedUserInfo: any;


  ngOnInit() {

    let userId = this.getparm.snapshot.paramMap.get('userid');

    console.log('userId:: ', userId);
    this.getUserInfo(userId);
  }

  getUserInfo(userId: any){

    this.userService.getUser(userId).subscribe(
      (res)=> {
        this.userInfo = res;
      },
      (error)=> {
        console.log('error:: ', error);
      },
    )

  }

  deleteUser(userid: any){
    this.userService.deleteUser(userid).subscribe(
      (res)=> {
        this.deletedUserInfo = res;
        alert('You have deleted this user.');
        this.router.navigate(['/users']);
      },
      (error)=> {
        console.log('error:: ', error);
      },
    )

  }

 



}
