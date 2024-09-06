import { Component, OnInit } from '@angular/core';
import { HeadphonesService } from '../Services/headphones.service';
import { CartService } from '../Services/cart.service';

interface Product {
  title: string;
  price: number;
}

@Component({
  selector: 'app-products-pg',
  templateUrl: './products-pg.component.html',
  styleUrls: ['./products-pg.component.scss']
})
export class ProductsPgComponent implements OnInit{

  
  productList:any[] = []
  constructor(private headPhones:HeadphonesService, private cartService : CartService){
    
  }
 

  searchTerm:String = "";
  
  ngOnInit(): void {
    this.productList = this.headPhones.getHeadphones();

    this.productList.forEach((a : any) => {
      Object.assign(a,{quantity:1,total:a.price})
    });

   
  }
  Search(){
    if(this.searchTerm == ""){
      return this.ngOnInit();
    }
    else{
      this.productList = this.productList.filter(res =>{
        return res.title.toLocaleLowerCase().match(this.searchTerm.toLocaleLowerCase());
      })
    }
  }

  sortPrice(){
    this.productList.sort((a,b)=>{
      return a.price - b.price
    })
    console.log(this.productList)
  }
  sortLower(){
    this.productList.sort((a,b)=>{
      return b.price - a.price
    })
  }

 addtocart(item:any){
  this.cartService.addToCart(item);
 }

}
