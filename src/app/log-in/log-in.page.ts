import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
   IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
     IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem]
  
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
