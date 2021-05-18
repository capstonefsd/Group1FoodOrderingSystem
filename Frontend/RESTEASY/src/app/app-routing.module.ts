import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdigasComponent } from './adigas/adigas.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PunjabirasoiComponent } from './punjabirasoi/punjabirasoi.component';
import { RegisterComponent } from './register/register.component';
import { RotigharComponent } from './rotighar/rotighar.component';
import { SearchComponent } from './search/search.component';
import { UdipiComponent } from './udipi/udipi.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Udipi', component: UdipiComponent },
  { path: '', component: AdigasComponent, pathMatch: 'full' },
  { path: 'rotighar', component: RotigharComponent },
  { path: 'punjabirasoi', component: PunjabirasoiComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
