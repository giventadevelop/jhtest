import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 12563,
  name: 'above awesome mortgage',
  price: 16838.28,
  size: 'M',
};

export const sampleWithPartialData: IProduct = {
  id: 20245,
  name: 'spectacular um prize',
  price: 19221.13,
  size: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IProduct = {
  id: 19535,
  name: 'drat',
  description: 'craft awkwardly acquaint',
  price: 16075.61,
  size: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'woot',
  price: 19204.4,
  size: 'L',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
