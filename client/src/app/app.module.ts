import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { ChatModule } from './chat/chat.module';

import { UserService } from './user.service';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ChatModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
