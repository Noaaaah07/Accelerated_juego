import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
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

  constructor(@Inject(DOCUMENT) public document : Document,private auth: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.auth.loginWithRedirect({
      appState: {
        target: '/home'
      }
    });
  }

  logOut(){
      this.auth.logout({
        logoutParams: {
          returnTo: this.document.location.origin
        }
      });
  }

}
