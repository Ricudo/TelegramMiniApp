import { Component } from '@angular/core';
import { Product, ProductsService } from '../../../_services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product?: Product;

  constructor(
    private _productService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    const id = this._route.snapshot.paramMap.get('id');
    this.product = this._productService.getById(id);
  }

  goBack() {
    this._router.navigate(['/']);
  }
}
