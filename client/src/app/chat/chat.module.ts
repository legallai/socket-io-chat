import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
