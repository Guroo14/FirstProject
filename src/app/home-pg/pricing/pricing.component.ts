import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  public isShow:Boolean = true;
  public isHiden:Boolean = false;
  public color:String = "#2F6CF7"
  public color1:String = "white"
  public showPrices:Boolean = false;
  public hidePrices:Boolean = true;

  onToggleBtn(){
    this.isShow =! this.isShow 
    this.isHiden =! this.isHiden

    this.showPrices =! this.showPrices
    this.hidePrices =! this.hidePrices
    switch(this.color){
      case "#2F6CF7": this.color = "white"; break
      case "white" : this.color = "#2F6CF7" 
    }
    switch(this.color1){
      case "white" : this.color1 = "#2F6CF7"; break
      case "#2F6CF7" : this.color1 = "white"
    }
  }

}
