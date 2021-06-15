import { Injectable } from '@angular/core';

// Category Interface
export interface ILocation {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getLocations() {
    let locations = [];

    let loc1: ILocation = {
      id: 1,
      name: 'Colombo',
      image: '../../assets/categories/category-1.png'
    }
    let loc2: ILocation = {
      id: 2,
      name: 'Kandy',
      image: '../../assets/categories/category-2.png'
    }
    let loc3: ILocation = {
      id: 3,
      name: 'Jaffna',
      image: '../../assets/categories/category-3.png'
    }

    locations.push(loc1, loc2, loc3);

    return locations;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-1.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-2.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-3.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 55,
      image: '../../assets/products/prod-4.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Mens T-Shirt',
      price: 34,
      image: '../../assets/products/prod-5.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Womens T-Shirt',
      price: 40,
      image: '../../assets/products/prod-6.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
