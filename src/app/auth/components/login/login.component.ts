import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // dung form builder cho gon
  loginForm !: FormGroup; 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let username = '';
    let password = '';
    this.loginForm = this.fb.group({
      username: [username, [Validators.required]],
      password: [password, [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit() {
    let values = this.loginForm.value;
    // get keys of values(Object)
    const keys = Object.keys(values);

    console.log(keys);
  }

  redirectIfUserLogin() {

  }

  // pushError(control_name:string, msg: string) {
  //   this.loginForm.controls[control_name].setErrors({msg:msg});
  // }
}
