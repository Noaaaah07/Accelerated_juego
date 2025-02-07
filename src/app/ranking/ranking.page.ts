import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class RankingPage implements OnInit {

  constructor(private navController: NavController, private http: HttpClient) { }

  public db_user:any;

  ngOnInit() {
    this.loadUser()
  }
  toPrincipal(){
    this.navController.navigateForward('/home')
  }
  loadUser(){
    this.http.get(`http://localhost:3000/ranking`).subscribe((response : any) => {
      this.db_user = response
      console.log(this.db_user)
    });

}
}