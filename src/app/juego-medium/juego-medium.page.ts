import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
   IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem,IonGrid,IonCol,IonRow,IonImg } from '@ionic/angular/standalone';


@Component({
  selector: 'app-juego-easy',
  templateUrl: './juego-easy.page.html',
  styleUrls: ['./juego-easy.page.scss'],
  standalone:true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
     IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem,IonGrid,IonCol,IonRow,IonImg]
})
export class JuegoMediumPage implements OnInit {

  constructor(private routerEvent: RouterEvent,private router:Router, private http: HttpClient,private alertController: AlertController) { }

  public activeButton: number = 0;
  public puntuacion: number = 0;
  public seconds: number = 15;  
  public timer: any;            
  public isRunning: boolean = false;
  public juego :any = [
    {
      id:1,
      color: 'success',
    },
    {
      id:1,
      color: 'danger',
    },
    {
      id:2,
      color: 'warning',

    },
    {
      id:2,
      color: 'success',
    },
    {
      id:3,
      color: 'success',
    },
    {
      id:3,
      color: 'danger',
    },
    {
      id:4,
      color: 'success',
    },
    {
      id:4,
      color: 'danger',
    },
    {
      id:5,
      color: 'success',
    },
    {
      id:6,
      color: 'success',
    },
    {
      id:6,
      color: 'danger',
    },
    {
      id:7,
      color: 'success',
    },
    {
      id:8,
      color: 'warning',
    },
    {
      id:8,
      color: 'success',
    },
    {
      id:8,
      color: 'danger',
    },
    {
      id:9,
      color: 'success',
    },
    {
      id:9,
      color: 'danger',
    },
    {
      id:10,
      color: 'success',
    },
    {
      id:11,
      color: 'success',
    },
    {
      id:12,
      color: 'success',
    },
    {
      id:12,
      color: 'danger',
    },
    {
      id:13,
      color: 'success',
    },
    {
      id:13,
      color: 'danger',
    },
    {
      id:13,
      color: 'warning',
    },
    {
      id:14,
      color: 'success',
    },
    {
      id:15,
      color: 'success',
    },
    {
      id:15,
      color: 'danger',
    },
    {
      id:16,
      color: 'success',
    },
    {
      id:17,
      color: 'success',
    },
    {
      id:17,
      color: 'danger',
    },
  ]

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Instrucciones y tutorial de juego',
      subHeader: '¡Bienvenido a ACCELERATED!',
      message: 'En este juego el objetivo es pulsar la máxima cantidad de botones posibles en un rango de 15 segundos de tiempo. Te damos opciones de cambiar de nivel a una mayor dificultad en los que podrán variar los colores y la puntuación de ellos... PULSA EL START PARA INICIAR UNA PARTIDA! ',
      buttons: ['Entendido'],
      backdropDismiss: false
    });
  await alert.present();
  }

  ngOnInit() {  }

  async mostrarAlertaFin() {
    const alert = await this.alertController.create({
      subHeader: `Tu puntuación ha sido de ${this.puntuacion} puntos`,
      buttons: [
        {text: 'OK',
          handler: () => {
            this.refreshPage(); // Llama a la función cuando se presiona "OK"
          }}],
      backdropDismiss: false
    });
    
  await alert.present();
  }
  
  deshabilitarBoton(color : string){
    this.activeButton += 1;
    if(color == 'success'){
      this.puntuacion += 1
    }else if(color == 'danger'){
      this.puntuacion -= 1
    }else if(color == 'warning'){
      this.puntuacion *= 2
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
    this.router.navigate(['/home'])
  }
}
