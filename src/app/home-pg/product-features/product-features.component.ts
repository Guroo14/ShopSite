import { Component } from '@angular/core';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss']
})
export class ProductFeaturesComponent {
  img:String = "https://i.vimeocdn.com/video/453663244-00ef64745903ba836aab99a388661ccfeecc7316371c427bdb7b4c4df66c2ed7-d?mw=700&mh=402"
  img1:String = "https://static.wixstatic.com/media/9c608a_56cf61f129cf44eb807c50b98f33de2a.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_56cf61f129cf44eb807c50b98f33de2a.png"

svgs:any[] = [
  {
    img:"https://static.wixstatic.com/media/9c608a_56cf61f129cf44eb807c50b98f33de2a.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_56cf61f129cf44eb807c50b98f33de2a.png",
    title:"Finest Materials",
    txt:"I'm an item. Click here to edit me."
  },
  {
    img:"https://static.wixstatic.com/media/9c608a_811e1f9ff1d14669b2074bc98d6134a6.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_811e1f9ff1d14669b2074bc98d6134a6.png",
    title:"Soft Ear Cushions",
    txt:"I'm an item. Click here to edit me."
  },
  {
    img:"https://static.wixstatic.com/media/9c608a_741b1b6c33244f99a1aeb8c1fb238db7.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_741b1b6c33244f99a1aeb8c1fb238db7.png",
    title:"Removable Cord",
    txt:"I'm an item. Click here to edit me."
  },
  {
    img:"https://static.wixstatic.com/media/9c608a_f4ae965496ea40608553b976c1f92c1e.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_f4ae965496ea40608553b976c1f92c1e.png",
    title:"Rigid Construction",
    txt:"I'm an item. Click here to edit me."
  },
  {
    img:"https://static.wixstatic.com/media/9c608a_4223e195718d4a498fc55907d3d0fdfa.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_4223e195718d4a498fc55907d3d0fdfa.png",
    title:"Supreme Audio Quality",
    txt:"I'm an item. Click here to edit me."
  },
  {
    img:"https://static.wixstatic.com/media/9c608a_4c417d1683fd403684ef6f960de70134.png/v1/fill/w_41,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_4c417d1683fd403684ef6f960de70134.png",
    title:"Easily Foldable",
    txt:"I'm an item. Click here to edit me."
  },
]

}
