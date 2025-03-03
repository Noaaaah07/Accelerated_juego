import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
   IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-menu-dificultades',
  templateUrl: './menu-dificultades.page.html',
  styleUrls: ['./menu-dificultades.page.scss'],
  standalone:true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
     IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem]
})
export class MenuDificultadesPage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient,private alertController: AlertController) { }

  
  ngOnInit() {
  }
  redirectEasy(){
    this.navController.navigateForward('/juego-easy')
  }
  toPrincipal(){
    this.navController.navigateForward('/home')
  }
  redirectMedium(){
    this.navController.navigateForward('/juego-medium')
  }
  redirectDificil(){
    this.navController.navigateForward('/juego-dificil')
  }
}
