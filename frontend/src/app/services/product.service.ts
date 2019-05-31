import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:String="http://localhost:3000";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.url+"/products");
  }
  postProducts(product:Product){
    updated_at: Date.now
    return this.http.post(this.url+"/products",product);
  }
  putProducts(product:Product){
    return this.http.put(this.url+"/products/"+product._id,product);
  }
  deleteProducts(_id:String){
    return this.http.delete(this.url+"/products/"+_id);
  }

}
