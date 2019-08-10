import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './crud/users/users.component';
import { UserProfileComponent } from './crud/user-profile/user-profile.component';
import { UpdateUserComponent } from './crud/update-user/update-user.component';
import { NewUserComponent } from './crud/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './crud.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserProfileComponent,
    UpdateUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
