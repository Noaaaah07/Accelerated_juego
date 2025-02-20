import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-juego-easy',
  templateUrl: './juego-easy.page.html',
  styleUrls: ['./juego-easy.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class JuegoEasyPage implements OnInit {

  constructor(private routerEvent: RouterEvent,private router:Router, private http: HttpClient,private alertController: AlertController) { }

  public activeButton: number = 0;
  public puntuacion: number = 0;
  public seconds: number = 20;  
  public timer: any;            
  public isRunning: boolean = false;
  public juego :any = [
    {
      id:1,
      color: 'success',
    },
    {
      id:2,
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
      id:5,
      color: 'success',
    },
    {
      id:6,
      color: 'success',
    },
    {
      id:7,
      color: 'success',
    },
    {
      id:7,
      color: 'danger',
    },
    {
      id:8,
      color: 'success',
    },
    {
      id:9,
      color: 'success',
    },
    {
      id:10,
      color: 'success',
    },
    {
      id:10,
      color: 'danger',
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
      id:13,
      color: 'success',
    },
    {
      id:13,
      color: 'danger',
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
    {
      id:18,
      color: 'success',
    },
    {
      id:19,
      color: 'success',
    },
    {
      id:20,
      color: 'success',
    },
    {
      id:21,
      color: 'success',
    },
    {
      id:22,
      color: 'success',
    },
    {
      id:23,
      color: 'danger',
    },
    {
      id:23,
      color: 'success',
    },
    {
      id:24,
      color: 'success',
    },
  ]
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Instrucciones y tutorial de juego',
      subHeader: '¡Bienvenido a ACCELERATED!',
      message: 'En este juego el objetivo es pulsar la máxima cantidad de botones posibles en un rango de 20 segundos de tiempo. Te damos opciones de cambiar de nivel a una mayor dificultad en los que podrán variar los colores y la puntuación de ellos... PULSA EL START PARA INICIAR UNA PARTIDA! ',
      buttons: ['OK']
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
    }else{
      this.puntuacion -= 1
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
