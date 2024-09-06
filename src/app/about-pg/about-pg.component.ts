import { Component } from '@angular/core';

@Component({
  selector: 'app-about-pg',
  templateUrl: './about-pg.component.html',
  styleUrls: ['./about-pg.component.scss']
})
export class AboutPgComponent {
  info1:any[] = [
    {
      img:"https://static.wixstatic.com/media/9c608a_e46362929dfc493084947c8581b3692f.png/v1/fill/w_54,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_e46362929dfc493084947c8581b3692f.png",
      title:"How we started"
    },
    {
      img:"https://static.wixstatic.com/media/9c608a_e4488fe90f1745219ecd2d609dec1d2d.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_e4488fe90f1745219ecd2d609dec1d2d.png",
      title:"Why Ambits?"
    }
  ]
  
  info2:any[]=[
    {
      img:"https://static.wixstatic.com/media/9c608a_2b50e2f1f5ad45199f88801050d0c83a.png/v1/fill/w_47,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_2b50e2f1f5ad45199f88801050d0c83a.png"
    },
    {
      img:"https://static.wixstatic.com/media/9c608a_2b50e2f1f5ad45199f88801050d0c83a.png/v1/fill/w_47,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_2b50e2f1f5ad45199f88801050d0c83a.png"
    },
    {
      img:"https://static.wixstatic.com/media/9c608a_2b50e2f1f5ad45199f88801050d0c83a.png/v1/fill/w_47,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_2b50e2f1f5ad45199f88801050d0c83a.png"
    }
  ]
}
