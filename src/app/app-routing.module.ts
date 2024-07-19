import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { FloristsComponent } from './florists/florists.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'florists', component: FloristsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
