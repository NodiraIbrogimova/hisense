import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AcademyComponent } from './pages/academy/academy.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'academy', component: AcademyComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'news',
    children: [
      {path: '', component: NewsComponent},
      {path:':id', component: NewsDetailsComponent}

    ] },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: ':id', component: ProductDetailComponent }
    ]

  },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
