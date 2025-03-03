import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Para navegar entre páginas.
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para trabajar con formularios (ngModel)
import { IonContent, IonHeader, IonToolbar, IonTitle,
  IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
   IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem,IonGrid,IonCol,IonRow,IonImg } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:true,
  imports: [CommonModule,IonContent, IonHeader, IonToolbar, IonTitle,
    IonList, IonIcon, IonMenu, IonLabel, IonRouterOutlet,
     IonMenuButton, IonMenuToggle, IonListHeader, IonButton,IonButtons,IonModal,IonRadio,IonItem,IonGrid,IonCol,IonRow,IonImg,FormsModule]
})
export class HomePage implements OnInit {

  constructor(@Inject(DOCUMENT) public document : Document,private router: Router, private http: HttpClient, public auth: AuthService) { }

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
    this.http.get(`https://repaso-6ub6.onrender.com/user/${this.auth_user.email}`).subscribe((response : any) => {
      console.log(response)
      this.db_user = response
    });
  }

  pasarMenu(){
    this.router.navigate(['/menu-dificultades']);
  }

  logOut(){
    this.auth.logout({
      logoutParams: {
        returnTo: this.document.location.origin
      }
    });
}
}
