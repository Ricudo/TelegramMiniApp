import { Component } from '@angular/core';
import { TelegramService } from '../../_services/telegram.service';
import {
  ByGroup,
  ProductType,
  ProductsService,
} from '../../_services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  productsByGroup = {} as ByGroup;
  readonly productType = Object.keys(ProductType);

  constructor(
    private _telegram: TelegramService,
    private _productService: ProductsService
  ) {
    this._telegram.BackButton.hide();
    this.productsByGroup = this._productService.byGroup;
  }
}
