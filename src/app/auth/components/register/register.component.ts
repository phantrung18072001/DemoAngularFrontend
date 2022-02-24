import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    let value = this.registerForm.value;
    console.log(value);
  }

  initForm() {
    let name = '';
    let username = '';
    let password1 = '';
    let password2 = '';
    let email = '';
    this.registerForm = this.fb.group({
      username: [username, [Validators.required]],
      password1: [password1, [Validators.required, Validators.minLength(8)]],
      password2: [password2, [Validators.required, Validators.minLength(8)]],
      name: [name, [Validators.required]],
      phone: [null,[Validators.required, Validators.pattern('[-0-9]{10,10}')]],
      email: [email,[Validators.required, Validators.email]],
    },
    { validator: this.matchingPasswords }
    )
  }

  matchingPasswords(c : AbstractControl) {
    const value = c.value;
    return (value.password1 === value.password2) ? null : {
      passwordNotMatch : true, 
    };
  }
  
  redirectIfUserRegister() {

  }

}
