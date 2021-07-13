import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './dashboard/carousel/carousel.component';
import { WorksSectionComponent } from './dashboard/works-section/works-section.component';
import { FourthSectionComponent } from './dashboard/fourth-section/fourth-section.component';
import { CardSectionComponent } from './dashboard/card-section/card-section.component';
import { NgxGlideModule } from 'ngx-glide';

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
  declarations: [ DashboardComponent, CarouselComponent, WorksSectionComponent, FourthSectionComponent, CardSectionComponent ],
  imports: [
    CommonModule,
    NgxGlideModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class AppsModule { }
