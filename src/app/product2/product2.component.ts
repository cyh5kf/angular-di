import { Component, OnInit, Injector } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // providers: [{
  //   provide: ProductService, useClass: AnotherProductService
  // }]
})
export class Product2Component implements OnInit {

  product: Product;

  constructor(private productService: ProductService) { }

    // private productService: ProductService;

  // constructor(private injector: Injector) {
  //   this.productService = injector.get(ProductService);  //手动调用注入器，实际避免使用这种方法，需要通过构造函数注入。
  // }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
