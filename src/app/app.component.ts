import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel,
 IonMenuButton, IonMenuToggle, IonListHeader, IonButtons, IonRouterLink, IonButton,IonImg,IonGrid,IonCol,IonRow,IonAlert } from '@ionic/angular/standalone';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
  imports: [IonApp,IonRouterOutlet,IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonIcon, IonMenu, IonLabel,   IonMenuButton, IonMenuToggle, IonListHeader,
    IonButtons, IonRouterLink, IonButton,IonImg,IonGrid,IonCol,IonRow,IonAlert],
})

export class AppComponent {
  constructor() {
    addIcons(icons);
  }
}
