import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    public formBuilder: FormBuilder,
  ) {
    this.signInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    
  }

  onSubmit(formData: any) {
    const { email, password } = formData;
    this.authService.signin(email, password);
  }

}
