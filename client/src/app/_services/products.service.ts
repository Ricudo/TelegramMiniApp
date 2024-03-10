import { Injectable } from '@angular/core';

const domain = 'https://cdn.pixabay.com/photo';

export enum ProductType {
  American = 'American',
  Asian = 'Asian',
  European = 'European',
}

export type ByGroup = { [key: string]: Product[] };

export interface Product {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: Product) {
  return {
    ...product,
    image: domain + product.image,
    link: 'https://randomwordgenerator.com/picture.php',
  };
}

const products: Product[] = [
  {
    id: '1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Cat 1',
    link: 'product1',
    image: '/2015/02/25/17/56/cat-649164_1280.jpg',
    time: '2024-03-06T12:00:00Z',
    type: ProductType.American,
  },
  {
    id: '2',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Cat 2',
    link: 'product2',
    image: '/2018/05/14/21/43/british-shorthair-3401683_1280.jpg',
    time: '2024-03-07T10:30:00Z',
    type: ProductType.Asian,
  },
  {
    id: '3',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Cat 3',
    link: 'product3',
    image: '/2017/11/14/13/06/kitty-2948404_1280.jpg',
    time: '2024-03-08T14:45:00Z',
    type: ProductType.European,
  },
  {
    id: '4',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    title: 'Cat 4',
    link: 'product4',
    image: '/2015/01/31/12/36/cat-618470_1280.jpg',
    time: '2024-03-09T09:15:00Z',
    type: ProductType.American,
  },
  {
    id: '5',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Cat 5',
    link: 'product5',
    image: '/2018/04/20/17/18/cat-3336579_1280.jpg',
    time: '2024-03-10T17:00:00Z',
    type: ProductType.Asian,
  },
  {
    id: '6',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    title: 'Cat 6',
    link: 'product6',
    image: '/2013/04/01/03/45/cat-98359_1280.jpg',
    time: '2024-03-11T11:20:00Z',
    type: ProductType.European,
  },
  {
    id: '7',
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    title: 'Cat 7',
    link: 'product7',
    image: '/2018/11/29/23/34/cat-3846780_1280.jpg',
    time: '2024-03-12T08:45:00Z',
    type: ProductType.American,
  },
  {
    id: '8',
    text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    title: 'Cat 8',
    link: 'product8',
    image: '/2016/11/21/14/47/kitten-1845789_1280.jpg',
    time: '2024-03-13T15:30:00Z',
    type: ProductType.Asian,
  },
  {
    id: '9',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    title: 'Cat 9',
    link: 'product9',
    image: '/2012/10/12/17/12/cat-61079_1280.jpg',
    time: '2024-03-14T13:10:00Z',
    type: ProductType.European,
  },
  {
    id: '10',
    text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    title: 'Cat 10',
    link: 'product10',
    image: '/2015/11/16/20/39/cat-1046343_1280.jpg',
    time: '2024-03-15T18:20:00Z',
    type: ProductType.American,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: Product[] = products.map(addDomainToLinkAndImage);
  constructor() {}

  getById(id: string | null): Product | undefined {
    if (id !== null) {
      return this.products.find((product) => product.id === id);
    }
    return;
  }

  get byGroup() {
    const group = {} as ByGroup;
    this.products.forEach((product) => {
      if (!group[product.type]) {
        group[product.type] = [];
      }
      group[product.type].push(product);
    });
    return group;
  }
}
