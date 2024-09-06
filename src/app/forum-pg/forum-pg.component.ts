import { Component } from '@angular/core';

@Component({
  selector: 'app-forum-pg',
  templateUrl: './forum-pg.component.html',
  styleUrls: ['./forum-pg.component.scss']
})
export class ForumPgComponent {
  post1Info:any[] = [
    {
      header:"Help and Getting Started",
      text:"Describe your forum category. Engage your audience and entice them to continue reading.",
      coms:3,
      fol:"follow"
    },
    {
      header:"Announcements and Deals",
      text:"Add your category description here. Be sure to write in an informative way that entices further...",
      coms:3,
      fol:"follow"
    },

  ]


  post2Info:any[] = [
    {
      img:"https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-03.png&w=1920&q=75",
      creator:"Admin",
      date:"Mar 22",
      sale:"Weekend sale",
      ann:"Announcements and Deals",
      txt:"Post about your forum topic here. Engage your  audience with relevant and interesting posts that ",
      like:"Like",
      coms:0
    },
    {
      img:"https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-03.png&w=1920&q=75",
      creator:"Admin",
      date:"Mar 22",
      sale:"High sound system in an affordable price",
      ann:"Announcements and Deals",
      txt:"This is your forum post. Use this space to connect with your audience in a way that's current and ",
      like:"Like",
      coms:0
    },
    {
      img:"https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-03.png&w=1920&q=75",
      creator:"Admin",
      date:"Mar 22",
      sale:"Introducing our new wireless headphones",
      ann:"Announcements and Deals",
      txt:"Create discussions of your choice and make them look just right with easy text editing options. ",
      like:"Like",
      coms:0
    },
  ]
}
