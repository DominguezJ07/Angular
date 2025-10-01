import { Injectable } from '@angular/core';

export interface Product{
  id:number;
  nombre:string;
  descripcion:string;
  precio:number;
  imagen:string;
}

@Injectable({
  providedIn: 'root'
})
export class Products {

  private products:Product[] = [
    {

  id: 1,
  nombre: 'Camping',
  descripcion: 'para ir a acampar ',
  precio: 650,
  imagen: '/img/Carpa.jpg'

  },
   {

  id: 1,
  nombre: 'Linterna',
  descripcion: 'para ir a acampar ',
  precio: 650,
  imagen: '/img/Carpa.jpg'

  },
   {

  id: 1,
  nombre: 'Estufa',
  descripcion: 'para ir a acampar ',
  precio: 650,
  imagen: '/img/estufa.jpg'

  },
   {

  id: 1,
  nombre: 'kit',
  descripcion: 'para ir a acampar ',
  precio: 650,
  imagen: '/img/kit.jpg'

  }
]

  constructor(){}
  getProducts():Product[]{
  return this.products;
}
}