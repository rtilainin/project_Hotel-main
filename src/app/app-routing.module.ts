import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { FloristsComponent } from './florists/florists.component';
import { FloristsWeddCollectionComponent } from './florists-wedd-collection/florists-wedd-collection.component';
import { FloristsAnnivCollectionComponent } from './florists-anniv-collection/florists-anniv-collection.component';
import { FloristsIloveyouCollectionComponent } from './florists-iloveyou-collection/florists-iloveyou-collection.component';
import { FloristsThankyouCollectionComponent } from './florists-thankyou-collection/florists-thankyou-collection.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
   { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'florists', component: FloristsComponent },
  { path: 'florists/wedd_collection', component: FloristsWeddCollectionComponent },
  { path: 'florists/anniv_collection', component: FloristsAnnivCollectionComponent },
  { path: 'florists/iloveyou_collection', component: FloristsIloveyouCollectionComponent },
  { path: 'florists/thankyou_collection', component: FloristsThankyouCollectionComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
