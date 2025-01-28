import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class HomePage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient) { }

  public id: string = 'yo@colegiosantamonica.eu';
  public user = {
    id: '',
    name: '',
    puntuacion: '',
  }

  ngOnInit() {
    this.loadUser();
  }
  loadUser(){
    this.http.get(`http://localhost:3000/user/${this.id}`).subscribe((response : any) => {
      console.log(response);
      this.user.id = response.id;
      this.user.name = response.name;
      this.user.puntuacion = response.puntuacion;
    });
    
  }

  pasarMenu(){
    this.navController.navigateForward('/menudificultades')
  }
  pasarRanking(){
    this.navController.navigateForward('/ranking')
  }

}
