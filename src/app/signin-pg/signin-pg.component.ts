import { Component } from '@angular/core';
import { User } from './form-filler/model';

@Component({
  selector: 'app-signin-pg',
  templateUrl: './signin-pg.component.html',
  styleUrls: ['./signin-pg.component.scss']
})
export class SigninPgComponent {
  public userDetails:User[] = [];

  RecieveForm(item:User[]){
    this.userDetails = item
    console.log(this.userDetails)
  }
}
