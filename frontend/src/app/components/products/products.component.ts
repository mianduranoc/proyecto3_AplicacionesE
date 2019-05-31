import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productSelected:Product= {
    _id: "",
    prod_name: "",
    prod_desc:"",
    prod_price:0,
    prod_img_url:"",
    updated_at:new Date()
  };
  products:Product[];
  edit:Boolean=false;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(res=>{
      this.products=res["data"] as Product[];
    });
  }
  selectProduct(id:String){
    this.edit=true;
    this.productSelected=this.products.find(x=>x._id==id);
  }
  cancelEdit(){
    this.edit=false;
    this.productSelected=new Product();
    this.getProducts();
  }
  addProduct(){
    if(!confirm("Quieres agregar el producto?"))
      return;
    this.productService.postProducts(this.productSelected).subscribe(res=>{
      this.getProducts();
      this.cancelEdit();
    });
  }
  updateProduct(){
    if(!confirm("Quieres actualizar el producto?"))
      return;
    this.productService.putProducts(this.productSelected).subscribe(res=>{
      this.getProducts();
      this.cancelEdit();
    });
  }
  deleteProduct(id:String){
    if(!confirm("Quieres borrar el producto?"))
      return;
    this.productService.deleteProducts(id).subscribe(res=>{
      this.getProducts();
    });
  }

}
