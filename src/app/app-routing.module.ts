import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { HomeComponent } from './home/home.component'
import { C1ScooterComponent } from './c1-scooter/c1-scooter.component';
import { ForceScooterComponent } from './force-scooter/force-scooter.component';
import { AboutComponent } from './about/about.component';
import { EngineeringComponent } from './engineering/engineering.component';

const routes: Routes = [
  {'path': '', component: HomeComponent, pathMatch: 'full' },
  {'path': 'home', component: HomeComponent },
  // {'path': 'products', component: ProductsComponent },
  // {'path': 'c1', component: C1ScooterComponent },
  // {'path': 'force', component: ForceScooterComponent },
  {'path': 'about', component: AboutComponent },
  {'path': 'engineering-services', component: EngineeringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
