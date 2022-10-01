import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorfulDivComponent } from './colorful-div/colorful-div.component';
import { CvComponent } from './cvTech/cv/cv.component';
const routes: Routes = [
  { path: 'carteVisite', component: CarteVisiteComponent },
  { path: 'cv', component: CvComponent },
  { path: 'color', component: ColorfulDivComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
