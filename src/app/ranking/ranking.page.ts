import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AuthService } from '@auth0/auth0-angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class RankingPage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient, public auth: AuthService) { }

  public db_user:any;
  public auth_user:any;

  ngOnInit() {
    this.auth.user$.subscribe((data) =>{
      this.auth_user = data
      console.log(this.auth_user)
      this.loadUser()
    })
  }
  toPrincipal(){
    this.navController.navigateForward('/home')
  }



  loadUser(){
    this.http.get(`http://localhost:3000/log`).subscribe((response : any) => {
      console.log(response)
      this.db_user = response
      console.log(this.db_user.id)
      console.log(this.db_user.name)
      console.log(this.db_user.puntuacion)
      if(this.db_user == 'Usuario encontrado'){}
    });

}
}