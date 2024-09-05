import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  logoImg:String = "assets/images/logo.svg"

  public check:Boolean = false;
  public hide:Boolean = false;
  
  
  hideFunction(){
    this.hide = false
    this.check = false
  }
  hamburgerMenu(){
    this.check =! this.check
    this.hide =! this.hide
  }
  
}
