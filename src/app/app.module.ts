import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPgComponent } from './about-pg/about-pg.component';
import { HomePgComponent } from './home-pg/home-pg.component';
import { ForumPgComponent } from './forum-pg/forum-pg.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsPgComponent } from './products-pg/products-pg.component';
import { ContactComponent } from './home-pg/contact/contact.component';
import { EditComponent } from './home-pg/edit/edit.component';
import { HearingComponent } from './home-pg/hearing/hearing.component';
import { ProductFeaturesComponent } from './home-pg/product-features/product-features.component';
import { HeadphonesService } from './Services/headphones.service';
import { FormsModule } from '@angular/forms';
import { CartPgComponent } from './cart-pg/cart-pg.component';
import { FooterPgComponent } from './footer-pg/footer-pg.component';
import { LoginPgComponent } from './login-pg/login-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPgComponent,
    HomePgComponent,
    ForumPgComponent,
    HeadphonesComponent,
    NavBarComponent,
    ProductsPgComponent,
    ContactComponent,
    EditComponent,
    HearingComponent,
    ProductFeaturesComponent,
    CartPgComponent,
    FooterPgComponent,
    LoginPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeadphonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
