import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }
