import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  public totalItem:number = 0;
 constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

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
