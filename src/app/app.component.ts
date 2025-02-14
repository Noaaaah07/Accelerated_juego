import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonRouterLink, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
  imports: [IonApp,IonRouterOutlet,IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonIcon, IonMenu, IonLabel,
   IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonRouterLink, IonButton],
})
export class AppComponent {
  constructor() {
    addIcons(icons);
  }
}
