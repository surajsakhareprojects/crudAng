import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './crud/users/users.component';
import { UserProfileComponent } from './crud/user-profile/user-profile.component';
import { UpdateUserComponent } from './crud/update-user/update-user.component';
import { NewUserComponent } from './crud/new-user/new-user.component';


const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'userprofile/:userid', component: UserProfileComponent},
  {path:'userprofile', component: UserProfileComponent},
  {path:'updateuser/:userid', component:UpdateUserComponent},
  {path:'updateuser', component:UpdateUserComponent},
  {path:'newuser', component:NewUserComponent},
  {path:'', component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
