import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  sponsor1:String = "assets/sponsorimg/graygrids.svg"
  sponsor2:String = "assets/sponsorimg/lineicons.svg"
  sponsor3:String = "assets/sponsorimg/tailadmin.svg"
  sponsor4:String = "assets/sponsorimg/tailgrids.svg"
  sponsor5:String = "assets/sponsorimg/uideck.svg"
}
