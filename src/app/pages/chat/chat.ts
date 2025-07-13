import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { DatePipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    DatePipe,
    // FormsModule,

  ],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat  implements OnInit {
  orderId = '';
  user: any;
  messages: any[] = [];
  newMessage = '';
  loading = true;
messageControl: any;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.user = this.authService.getUser();
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id')!;
    this.loadMessages();
    setInterval(() => this.loadMessages(), 5000); // simple polling
  }

  loadMessages() {
    this.messageService.getMessages(this.orderId).subscribe({
      next: (msgs) => {
        this.messages = msgs;
        this.loading = false;
      },
      error: (err) => console.error(err)
    });
  }

  send() {
    if (!this.newMessage.trim()) return;

    this.messageService.sendMessage(this.orderId, this.newMessage).subscribe({
      next: (msg) => {
        this.messages.push(msg);
        this.newMessage = '';
      },
      error: (err) => console.error(err)
    });
  }
}

