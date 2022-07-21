import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { ImageTextBarcardComponent } from './parts/image-text-barcard/image-text-barcard.component';
import { ImageTextHorlCardComponent } from './parts/image-text-horl-card/image-text-horl-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AcademyComponent,
    AwardsComponent,
    NewsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ImageTextBarcardComponent,
    ImageTextHorlCardComponent,
    ProductsComponent,
    ProductDetailComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
