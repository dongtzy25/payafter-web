import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './dashboard/carousel/carousel.component';
import { WorksSectionComponent } from './dashboard/works-section/works-section.component';
import { CardSectionComponent } from './dashboard/card-section/card-section.component';
import { NgxGlideModule } from 'ngx-glide';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { FooterComponent } from './layouts/footer/footer.component';




const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard"
  },
  {
    path: "dashboard",
    component : DashboardComponent
  },
]

@NgModule({
  declarations: [ 
    DashboardComponent, 
    CarouselComponent, 
    WorksSectionComponent, 
    CardSectionComponent,
    NavigationComponent,
    FooterComponent
   ],
  imports: [
    CommonModule,
    NgxGlideModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class AppsModule { }
