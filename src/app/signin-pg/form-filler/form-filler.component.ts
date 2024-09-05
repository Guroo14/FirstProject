import { Component, EventEmitter, Output } from '@angular/core';
import { User } from './model';

@Component({
  selector: 'app-form-filler',
  templateUrl: './form-filler.component.html',
  styleUrls: ['./form-filler.component.scss']
})
export class FormFillerComponent {
  @Output() onChangeEventEmitter:EventEmitter<User[]> = new EventEmitter()

  userInfo:User = new User()
  userList:User[] = []
  
  onBtnSave(){
    this.userList.push(this.userInfo)
    this.onChangeEventEmitter.emit(this.userList)
    
  }
}
