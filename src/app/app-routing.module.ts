import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddBabyDetailsComponent } from './views/add-baby-details/add-baby-details.component';
import { AppComponent } from './app.component';
import { ShowBabyDetailsComponent } from './views/show-baby-details/show-baby-details.component';

const routes: Routes = [
   {path:'', component: AppComponent},
   {path:'baby-details', component: AddBabyDetailsComponent},
   {path:'show-baby-details', component: ShowBabyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
