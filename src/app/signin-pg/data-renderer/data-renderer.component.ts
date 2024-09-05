import { Component, Input } from '@angular/core';
import { User } from '../form-filler/model';

@Component({
  selector: 'app-data-renderer',
  templateUrl: './data-renderer.component.html',
  styleUrls: ['./data-renderer.component.scss']
})
export class DataRendererComponent {

  @Input()
    public userInfoDetails:User[] = []
    


  onRemoveBtn(){
    this.userInfoDetails.splice(this.userInfoDetails.length-1)
    console.log(this.userInfoDetails)
  }

}
