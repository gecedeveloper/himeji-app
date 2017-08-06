import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Productos";
  products: Array<any>;

  constructor(http: Http) {
    http.get('https://himeji-api.herokuapp.com/items')
      .map(response => response.json())
      .subscribe(res => this.products = res);
      console.log(this.products);
  } 
  
  ngOnInit() {}
  
}
