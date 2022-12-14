import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorfulDivComponent } from './colorful-div/colorful-div.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { ItemComponent } from './cvTech/item/item.component';
import { ListComponent } from './cvTech/list/list.component';
import { ElestSelectComponent } from './elest-select/elest-select.component';
import { ArcEnCielDirective } from './directives/arc-en-ciel.directive';
import { WordComponent } from './directives/word/word.component';
import { DefaultImagePipe } from './default-image.pipe';
import { CvEmbaucheComponent } from './cvTech/cv/cv-embauche/cv-embauche.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { CvDetailsComponentComponent } from './cv-details-component/cv-details-component.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';

import { AuthComponent } from './auth/auth.component';
import { SuiteImagesComponent } from './suite-images/suite-images.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorfulDivComponent,
    CarteVisiteComponent,
    FilsComponent,
    CvComponent,
    DetailComponent,
    ItemComponent,
    ListComponent,
    ElestSelectComponent,
    ArcEnCielDirective,
    WordComponent,
    DefaultImagePipe,
    CvEmbaucheComponent,
    RouterSimulatorComponent,
    CvDetailsComponentComponent,
    AddCvComponent,
    DeleteCvComponent,

    AuthComponent,
     SuiteImagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
