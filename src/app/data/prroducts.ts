import { Product } from '../interfaces/product.inteface';

export const products: Array<Product> = [
  {
    id: 1,
    codigo: 1,
    descripcion: 'Galletas chokis',
    precioCompra: 10,
    precioVenta: 15,
    ganancia: 5,
    existencia: 100,
  },
  {
    id: 2,
    codigo: 2,
    descripcion: 'Mermelada de fresa',
    precioCompra: 65,
    precioVenta: 80,
    ganancia: 15,
    existencia: 100,
  },
  {
    id: 3,
    codigo: 3,
    descripcion: 'Aceite',
    precioCompra: 18,
    precioVenta: 20,
    ganancia: 2,
    existencia: 100,
  },
  {
    id: 4,
    codigo: 4,
    descripcion: 'Palomita de maíz',
    precioCompra: 12,
    precioVenta: 15,
    ganancia: 3,
    existencia: 100,
  },
  {
    id: 5,
    codigo: 5,
    descripcion: 'Doritos',
    precioCompra: 5,
    precioVenta: 8,
    ganancia: 3,
    existencia: 10,
  },
];
