import { Injectable } from '@angular/core';
import { Product, ProductService } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log("getProduct方法被调用");
    return new Product(1, "sumsung7", 4899, "最新款三星手机")
  }

}
