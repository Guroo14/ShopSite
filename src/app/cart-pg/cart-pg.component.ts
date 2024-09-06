import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { HeadphonesService } from '../Services/headphones.service';

@Component({
  selector: 'app-cart-pg',
  templateUrl: './cart-pg.component.html',
  styleUrls: ['./cart-pg.component.scss']
})
export class CartPgComponent implements OnInit{
  

  public products : any[] = [];
  // public grandTotal !: number ;
  public info!:any
  
  public cartTotal : number = 0
  
    constructor(private routes:ActivatedRoute, private cartService : CartService, private headphones : HeadphonesService){
      this.routes.queryParams.subscribe(data=>{
        this.info = data;
        console.log(this.info)
      })
    }
  ngOnInit(): void {
   
    this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
      // this.grandTotal = this.cartService.getTotalPrice();
    })
    this.products.forEach(item =>{
      this.cartTotal += (item.quantity * item.price)
    })
   
  }

  

  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

  inc(item : any){
   
      item.quantity += 1
      item.total = item.quantity * item.price;
      
  }
  dec(item : any){
    if(item.quantity != 1){
      item.quantity -= 1
    }
    item.total = item.quantity * item.price;
  }

  get grandTotal(): number {
    return this.products.reduce((total, item) => total + item.total, 0);
  }
    
}
