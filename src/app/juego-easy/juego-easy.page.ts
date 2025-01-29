import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-juego-easy',
  templateUrl: './juego-easy.page.html',
  styleUrls: ['./juego-easy.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class JuegoEasyPage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient,private alertController: AlertController) { }

  public activeButton: number = 0;
  public puntuacion = 0 ;
  public seconds: number = 15;  
  public timer: any;            
  public isRunning: boolean = false;
  public juego :any =[
    {
      id:1,
      color: 'success'
    },
    {
      id:2,
      color: 'success'
    },
    {
      id:3,
      color: 'success',
      puntuacion: 1,

    },
    {
      id:4,
      color: 'success'
    },
    {
      id:5,
      color: 'success'
    },
    {
      id:6,
      color: 'success'
    },
    {
      id:7,
      color: 'success'
    },
    {
      id:8,
      color: 'success',
      puntuacion: -1,
    },
    {
      id:9,
      color: 'success'
    },
    {
      id:10,
      color: 'success'
    },
    {
      id:11,
      color: 'success'
    },
    {
      id:12,
      color: 'success',
      puntuacion: -1,
    },
    {
      id:13,
      color: 'success'
    },
    {
      id:14,
      color: 'success'
    },
    {
      id:15,
      color: 'success'
    },
    {
      id:16,
      color: 'success',
      puntuacion: -1,
    },
    {
      id:17,
      color: 'success'
    },
    {
      id:18,
      color: 'success'
    },
    {
      id:19,
      color: 'success',
      puntuacion: -1,
    },
    {
      id:20,
      color: 'success'
    },
    {
      id:21,
      color: 'success'
    },
    {
      id:22,
      color: 'success',
      puntuacion: -1,
    },
    {
      id:23,
      color: 'success'
    },
    {
      id:24,
      color: 'success'
    },
    {
      id:25,
      color: 'success'
    },
    {
      id:26,
      color: 'success'
    },
    {
      id:27,
      color: 'success'
    },
    {
      id:28,
      color: 'success',
      puntuacion: -1,
    },
    {
      id:29,
      color: 'success'
    },
    {
      id:30,
      color: 'success'
    },
    {
      id:31,
      color: 'success'
    },
  ]

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Instrucciones y tutorial de juego',
      subHeader: '¡Bienvenido a ACCELERATED!',
      message: 'En este juego el objetivo es pulsar la máxima cantidad de botones posibles en un rango de 15 segundos de tiempo. Te damos opciones de cambiar de nivel a una mayor dificultad en los que podrán variar primero figura y luego figura,color... ',
      buttons: ['OK']
    });
  await alert.present();
  }
  ngOnInit() {  }
  async mostrarAlertaFin() {
    const alert = await this.alertController.create({
      subHeader: `Tu puntuación ha sido de ${this.puntuacion} puntos`,
    });
  await alert.present();
  let intervalo = setInterval(() => {
    this.refreshPage()
    clearInterval(intervalo)
  },3000)
  }
  
  deshabilitarBoton( color : string){
    this.activeButton += 1;
    if(color == 'success'){
      this.puntuacion += 1
    }
    }

    async startTimer() {
      this.activeButton = 1;
      this.isRunning = true;
      this.timer = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          clearInterval(this.timer);
          this.isRunning = false;
        }
        if (this.isRunning == false){
          this.mostrarAlertaFin();
        }
      }, 1000);
      for (let i = this.juego.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generar índice aleatorio
        [this.juego[i], this.juego[j]] = [this.juego[j], this.juego[i]]; // Intercambiar elementos
      }
    }
  refreshPage() {
    window.location.reload();
  }
  toPrincipal(){
    this.navController.navigateForward('/home')
  }
}