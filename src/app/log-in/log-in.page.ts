import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule]
  
})
export class LogInPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.auth.loginWithRedirect({
      appState: {
        target: '/home'
      }
    });
  }

}
