import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loginForm:FormGroup;

  constructor( private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      full_name: new FormControl(null, [Validators.required]),
      email_mobile: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      congirm_password: new FormControl(null, [Validators.required]),
    })
   }

  ngOnInit() {
    console.log('singup page load');
    
  }

}
