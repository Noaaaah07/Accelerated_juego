import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class RankingPage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient, private router: Router) { }

  public id: string = 'yo@colegiosantamonica.eu';
  public user = {
    id: '',
    name: '',
    puntuacion: '',
  }

  ngOnInit() {
    this.loadUser
  }
  toPrincipal(){
    this.navController.navigateForward('/home')
  }
  loadUser(){
    this.http.get(`http://localhost:3000/user/${this.id}`).subscribe((response : any) => {
      console.log(response);
      this.user.id = response.id;
      this.user.name = response.name;
      this.user.puntuacion = response.puntuacion;
    });

}
}