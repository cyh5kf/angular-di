import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  // providers: [ProductService, LoggerService],  // 提供器
  providers: [{
    provide: ProductService,
    useFactory: provideFactory,  // 使用工厂方法提供器，注意在这里声明的实例化对象，在整个应用中调用的对象都是同一个
    deps: [LoggerService, "APP_CONFIG"]  // 在deps里声明需要依赖的服务并实例化对象，通过参数传入工厂方法提供器
  }, LoggerService,
    {
      // provide: "IS_DEV_ENV", useValue: false // 第一个参数是字符串，第二个是内容值，通过这个方式在工厂方法提供器注入第二个参数，根据第二个参数的值来判断执行哪一个服务。
      provide: "APP_CONFIG", useValue: {isDev: false}  // 也可以传递一个对象
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function provideFactory(logger: LoggerService, appConfig) {
  if(appConfig.isDev) {
    return new ProductService(logger);
  } else {
    return new AnotherProductService(logger);
  }
}
