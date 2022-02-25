import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodctsList:any
  constructor(private Api:ApiService,private cartApi:CartApiService) { }

  ngOnInit(): void {
    this.Api.getproduct().subscribe(res=>{
      this.prodctsList=res;
      this.prodctsList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    }

    )
  }
  addtoCart(item:any){
   this.cartApi.addToCart(item)
  }



}
