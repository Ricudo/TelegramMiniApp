import { Component, Input } from '@angular/core';
import { Product } from '../../_services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() products: Product[] = [];
}
