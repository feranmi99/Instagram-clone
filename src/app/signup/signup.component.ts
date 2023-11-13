import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface userInterface {
  Username: string;
  Password: string;
  Email: string;
  Fullname: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(public router: Router) {}

  public email = '';
  public password = '';
  public username = '';
  public fullname = ''


  signUp() {
    // this.router.navigate(['dashboard']);
    const usersSchema = {
      Username: this.username,
      Password: this.password,
      Email: this.email,
      Fullname: this.fullname,
    };
    console.log(usersSchema);
    if(usersSchema.Username === '' || usersSchema.Password === '' || usersSchema.Email === '' || usersSchema.Fullname === ''){
      alert('fill the form')
    } else {
      localStorage.setItem('userlogin',JSON.stringify(usersSchema));
    }


    
  }
}
