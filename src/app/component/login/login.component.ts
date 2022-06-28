import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any = 'token inicial';

  form: any = {
    username: " ",
    password: null,
  };

  isLoginFailed = false;
  isLoggedIn = false;
  errorMessage = '';

  submitted = false;

  constructor(
    private authService: AuthService,
  //  private tokenStorage: TokenStorageService
  ) {}
  ngOnInit(): void {

    const sign_in_btn: any = document.querySelector("#sign-in-btn");
    const container: any = document.querySelector(".co");

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    // }
  }

  login(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe((data) => {

      window.sessionStorage.setItem("authtoken", data.token);
      console.log(`getItem ${window.sessionStorage.getItem("authtoken")}`);
      console.log(data.token);
     // this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
    });
  }
}
