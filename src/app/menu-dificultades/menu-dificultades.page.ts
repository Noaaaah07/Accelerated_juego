import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-menu-dificultades',
  templateUrl: './menu-dificultades.page.html',
  styleUrls: ['./menu-dificultades.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class MenuDificultadesPage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient,private alertController: AlertController) { }

  ngOnInit() {
  }
  redirectEasy(){
    this.navController.navigateForward('/juego')
  }
  toPrincipal(){
    this.navController.navigateForward('/principal')
  }
  redirectMedium(){
    this.navController.navigateForward('/juegodificultadmedia')
  }
}
