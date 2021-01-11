import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletLogoComponent } from './outlet-logo/outlet-logo.component';
import { OutletRefModule, OutletModule } from '@spartacus/storefront';
import { OutletCartComponent } from './outlet-cart/outlet-cart.component';
import { OutletNavigationComponent } from './outlet-navigation/outlet-navigation.component';

@NgModule({
  declarations: [
    OutletLogoComponent,
    OutletCartComponent,
    OutletNavigationComponent,
  ],
  imports: [CommonModule, OutletRefModule, OutletModule],
  exports: [
    OutletLogoComponent,
    OutletCartComponent,
    OutletNavigationComponent,
  ],
})
export class ComponentsModule {}
