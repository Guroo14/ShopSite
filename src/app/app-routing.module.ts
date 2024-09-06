import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';
import { AboutPgComponent } from './about-pg/about-pg.component';
import { ProductsPgComponent } from './products-pg/products-pg.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { ForumPgComponent } from './forum-pg/forum-pg.component';
import { CartPgComponent } from './cart-pg/cart-pg.component';
import { LoginPgComponent } from './login-pg/login-pg.component';

const routes: Routes = [
  {path:"",component:HomePgComponent},
  {path:"About",component:AboutPgComponent},
  {path:"Products",component:ProductsPgComponent},
  {path:"Products/:name",component:HeadphonesComponent},
  {path:"Forum",component:ForumPgComponent},
  {path:"Cart",component:CartPgComponent},
  {path:"Login",component:LoginPgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
