import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any=[];
  allProducts:any=0
  constructor(private cartApi:CartApiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.products=res;
      this.allProducts=this.cartApi.getTotalAmount();
    })
  }
  removeProduct(item:any){
    this.cartApi.removeCartData(item)
  }
  removeAllProducts(){
    this.cartApi.removeAllCart();
  }

}
