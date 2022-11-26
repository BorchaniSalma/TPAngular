import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorfulDivComponent } from './colorful-div/colorful-div.component';
import { CvDetailsComponentComponent } from './cv-details-component/cv-details-component.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { WordComponent } from './directives/word/word.component';
const routes: Routes = [
  { path: 'cv', children : [
    { path: '', component: CvComponent },
    { path: 'add', component: AddCvComponent },
    { path: ':id', component: CvDetailsComponentComponent },
    { path: 'delete/:id', component: DeleteCvComponent },

  ] },

  { path: 'carteVisite', component: CarteVisiteComponent },
  { path: 'color', component: ColorfulDivComponent },
  { path: 'word', component: WordComponent },
  { path: 'auth', component: AuthComponent },

  { path: '', component: CvComponent },
  { path: '**', component: CvComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
