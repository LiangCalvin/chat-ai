import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ChatComponent } from "./chat/chat.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-chat-app';
}
