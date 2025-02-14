import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class HomePage implements OnInit {

  constructor(@Inject(DOCUMENT) public document : Document,private navController: NavController, private http: HttpClient, public auth: AuthService) { }

  public auth_user : any;
  public db_user :any;

  ngOnInit() {
    this.auth.user$.subscribe((data) =>{
      this.auth_user = data
      console.log(this.auth_user)
      this.loadUser()
    }
  )
  }

  loadUser(){
    this.http.get(`http://localhost:3000/user/${this.auth_user.email}`).subscribe((response : any) => {
      console.log(response)
      this.db_user = response
      if(response == 'Usuario no encontrado'){
        this.createUser()
      }
    });
  }

  createUser(){
    let user = {
      id: this.auth_user.name,
      name: this.auth_user.nickname,
      puntuancion: 0
    }
    this.http.post(`http://localhost:3000/log`,user).subscribe((response : any) => {
      this.db_user = response
      console.log(this.db_user)
    });
  }

  pasarMenu(){
    this.navController.navigateForward('/menu-dificultades')
  }
  pasarRanking(){
    this.navController.navigateForward('/ranking')
  }

  logOut(){
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
}
}
