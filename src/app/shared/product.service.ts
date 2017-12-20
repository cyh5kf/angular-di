import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()  //装饰器，ProductService也可以通过构造函数注入其他服务到这个服务，至于这个服务能否注入到其他服务，由有没有在模块里（app.module.ts）声明决定
export class ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log("getProduct方法被调用");
    return new Product(0, "iPhone7", 5899, "最新款苹果手机");
  }

}
 
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}