import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { User } from '../../user/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email : string;
  pass : string;
  constructor(private userService : UserService , private routes : Router) { }
  user : User
  ngOnInit(): void {}

  login() : void {
    this.userService.login(this.email , this.pass).subscribe(response => {
      if(response.login) {
        this.user = response.usuario;
        if(this.user.isAdmin == 1) {
          this.routes.navigate(['/home']);
          this.userService.setUserAuth(true);
        }else{
          alert('Permição Negada');
          this.userService.setUserAuth(false);
        }

      }else {
        alert('Usuario ou senha incorretos');
        this.userService.setUserAuth(false);
      }
    })
  }

}
