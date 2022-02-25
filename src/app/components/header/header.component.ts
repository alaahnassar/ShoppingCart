import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
totalItemNumber:number=0
  constructor(private cartApi:CartApiService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.totalItemNumber=res.length;
    })
  }

}
