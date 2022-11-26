import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorfulDivComponent } from './colorful-div/colorful-div.component';
import { CvDetailsComponentComponent } from './cv-details-component/cv-details-component.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { WordComponent } from './directives/word/word.component';
const routes: Routes = [
  { path: 'carteVisite', component: CarteVisiteComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: CvDetailsComponentComponent },

  { path: 'color', component: ColorfulDivComponent },
  { path: 'word', component: WordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
