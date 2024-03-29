import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        data: { pageTitle: 'jhtestApp.product.home.title' },
        loadChildren: () => import('./product/product.routes'),
      },
      {
        path: 'product-category',
        data: { pageTitle: 'jhtestApp.productCategory.home.title' },
        loadChildren: () => import('./product-category/product-category.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
