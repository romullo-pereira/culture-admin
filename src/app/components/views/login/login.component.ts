import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email : string;
  pass : string;
  constructor(private userService : UserService , private routes : Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
    })
  }

  login() : void {
    this.userService.login(this.email , this.pass).subscribe(response => {
      if(response.login) {
        console.log('certo');
        this.routes.navigate(['/home']);
      }else {
        console.log('foi n');
      }

      console.log(response);
      
    })
  }

}
