import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface LoginModel{
  UserName:string;
  Password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  LoginDetail:LoginModel;
  // isAlertOpen = false;
  // alertButtons = ['Ok'];

  constructor(private alertController: AlertController,private route: Router) { 
    this.LoginDetail = {
      UserName :"",
      Password:""
    }
  }

  ngOnInit() {
  }
  async presentAlert(heading:any,subheading:any,message:any) {
    const alert = await this.alertController.create({
      header: heading,
      subHeader: subheading,
      message: subheading,
      buttons: ['Ok'],
    });

    await alert.present();
  }
 
  async loginClick(){
   debugger
   console.log(this.LoginDetail);
     if(this.LoginDetail.UserName == "" || this.LoginDetail.UserName.length<=5 || this.LoginDetail.Password == "" || this.LoginDetail.Password.length<=5){
      await this.presentAlert("Error","Error in field","Please enter the valid value in field");
      return;
     }
     await this.presentAlert("Succcess","Success Information","Login Successfully");
     this.route.navigate(['/home']);
     return;
  }

}
