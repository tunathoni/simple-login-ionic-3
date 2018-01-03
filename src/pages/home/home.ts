import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username :any;
  email :any;

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();

    if (info !== undefined) {
      this.email = info.email;  
      this.username = info.name;  
    } else {
      this.email = '';
      this.username = '';
    }
    
    console.log(info);
  }

  /**
   * logout
   */
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.push(LoginPage, {

      });
    });
  }

}
