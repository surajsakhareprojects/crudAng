import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private getParm: ActivatedRoute, private userService: CrudService, private router: Router) { }

  userInfo: any = {
    "fName": '',
    "lName": '',
    "email": '',
    "age": ''
  };
  userId: any;

  ngOnInit() {

    this.userId = this.getParm.snapshot.paramMap.get('userid');

    this.getUserInfo();
  }

  getUserInfo(){

    this.userService.getUser(this.userId).subscribe(
      (res)=> {
        this.userInfo = res;
      },
      (error)=> {
        console.log('error:: ', error);
      }
    )

  }

  submitform(updateUser: any){
    this.userService.updateUser(this.userId, updateUser).subscribe(
        (res)=> {
          alert('You have updated successfully');
          this.router.navigate(['/users']);
        },
        (error)=> {
          console.log('error:: ', error);
        },
      )
  
  }

}
