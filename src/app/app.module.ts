import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { C1ScooterComponent } from './c1-scooter/c1-scooter.component';
import { ForceScooterComponent } from './force-scooter/force-scooter.component';
import { AboutComponent } from './about/about.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavBarComponent,
    FooterComponent,
    C1ScooterComponent,
    ForceScooterComponent,
    AboutComponent,
    EngineeringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
