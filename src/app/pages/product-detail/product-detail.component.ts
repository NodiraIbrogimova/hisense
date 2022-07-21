import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/services/products/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;
  currProduct: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.currProduct= Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(this.currProduct).subscribe(product => this.product = product);
  }

  openSection(id: number): any {
    return 'active' ? this.currProduct === id : 'hidden';
  }

  goBack(): void {
    this.currProduct = 0;
    this.location.back();
  }

}
