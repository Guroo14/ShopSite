import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.scss']
})
export class HeadphonesComponent {
  info!:any
  products : any[] = [];

  constructor(private routes:ActivatedRoute, private cartService : CartService){
    this.routes.queryParams.subscribe(data =>{
      this.info = data
      console.log(this.info)
    })
  }
ngOnInit(): void {
  this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res; 
    })
}

addtocart(info:any){
  this.cartService.addToCart(info);
 }


  hide:Boolean = false;
  show:Boolean = true;
  toggleTxt(){
    this.hide =! this.hide
    this.show =! this.show
  }

  // productQuantity:number =1
  // plusClicked(value:String){
  //   if(this.productQuantity > 0 && value =="max"){
  //     this.productQuantity +=1
  //   }
  //   else if(this.productQuantity > 1 && value =="min" ){
  //     this.productQuantity -=1
  //   }
  // }

  inc(info:any){
    info.qnt += 1
  }
  dec(info:any){
    if(info.qnt != 1){
      info.qnt -= 1
    }
  }
}
