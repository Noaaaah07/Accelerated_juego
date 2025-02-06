import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PruebasPage implements OnInit {
  counter: number = 15;
  intervalId: any;
  alertShown: boolean = false; // Para manejar la interfaz bloqueada

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        clearInterval(this.intervalId);
        this.showAlert();
      }
    }, 1000);
  }

  showAlert() {
    this.alertShown = true;
    setTimeout(() => {
      alert("¡Tiempo agotado!");
      this.alertShown = false;
    }, 100);
  }
}
