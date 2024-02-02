import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 20801,
  name: 'suddenly blindly yahoo',
};

export const sampleWithPartialData: IProductCategory = {
  id: 29180,
  name: 'sleet wetly whereas',
};

export const sampleWithFullData: IProductCategory = {
  id: 9734,
  name: 'clasp elated that',
  description: 'missile meander',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'whose',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
