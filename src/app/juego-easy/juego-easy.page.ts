import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-juego-easy',
  templateUrl: './juego-easy.page.html',
  styleUrls: ['./juego-easy.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JuegoEasyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
