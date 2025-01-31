import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-juego-dificil',
  templateUrl: './juego-dificil.page.html',
  styleUrls: ['./juego-dificil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JuegoDificilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
