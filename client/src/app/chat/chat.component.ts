import { Component, OnInit } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Message } from './message';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  faPaperPlane = faPaperPlane;

  currentUserId: number;

  messages: Message[] = [
    { text: 'a', sender: 0 },
    { text: 'b', sender: 1 },
    { text: 'c', sender: 2 },
    { text: 'd', sender: 3 },
    { text: 'e', sender: 4 },
  ];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.currentUserId = this.loginService.currentUserId;
    console.log(this.currentUserId);
  }

}
