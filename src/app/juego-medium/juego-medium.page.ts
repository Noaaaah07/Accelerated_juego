import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-juego-medium',
  templateUrl: './juego-medium.page.html',
  styleUrls: ['./juego-medium.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JuegoMediumPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
