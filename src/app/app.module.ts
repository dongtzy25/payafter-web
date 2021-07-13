import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { FooterComponent } from './layouts/footer/footer.component';



const appRoutes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/apps/apps.module').then((m) => m.AppsModule),
  },
  {
    path: '**',
    redirectTo: 'main',
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
