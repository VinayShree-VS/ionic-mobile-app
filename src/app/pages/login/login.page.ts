import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;

  constructor( private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email_mobile: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
   }

  ngOnInit() {
    console.log('Login page load');
    
  }
}
