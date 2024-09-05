import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  portfolio1:String = "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-01.jpg&w=1920&q=75"
  portfolio2:String = "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-02.jpg&w=1920&q=75"
  portfolio3:String = "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-03.jpg&w=1920&q=75"

  
  profile1:String = "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-01.png&w=1920&q=75"
  profile2:String = "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-02.png&w=1920&q=75"
  profile3:String = "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-03.png&w=1920&q=75"


}
