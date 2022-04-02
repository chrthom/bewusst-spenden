import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionnairePage } from './questionnaire.page';

import { QuestionnairePageRoutingModule } from './questionnaire-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QuestionnairePageRoutingModule
  ],
  declarations: [QuestionnairePage]
})
export class QuestionnairePageModule {}
