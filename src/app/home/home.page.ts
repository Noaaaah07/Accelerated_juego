import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class HomePage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient, public auth: AuthService) { }

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
      email: this.auth_user.email,
      name: this.auth_user.name,
      picture: this.auth_user.picture
    }
    //this.http.post(`http://localhost:3000/user/:${user}`).subscribe((response : any) => {
      //console.log(response)
      //this.db_user = response
      
    //});
  }

  pasarMenu(){
    this.navController.navigateForward('/menu-dificultades')
  }
  pasarRanking(){
    this.navController.navigateForward('/ranking')
  }

}
