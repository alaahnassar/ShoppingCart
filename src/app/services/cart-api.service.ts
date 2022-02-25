import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
cartDataList:any=[];
productList=new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
  //Get product data
  getProductData(){
    return this.productList.asObservable()
  }
  //Set product data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product)
  }
  //Add to cart details
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList)
  }
  //Get Total amount
  getTotalAmount(){
    let grandTotal=0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal
  }
  //Remove Cart Data One by one
  removeCartData(product:any){
this.cartDataList.map((a:any,index:any)=>{
  if(product.id===a.id){
this.cartDataList.splice(index,1)
  }
})
this.productList.next(this.cartDataList)
  }
  //Remove All Data
  removeAllCart(){
    this.cartDataList=[];
    this.productList.next(this.cartDataList)
  }
}
