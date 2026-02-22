import { Component, inject, OnInit, signal } from '@angular/core';
import { backgroundImages } from '../../core/shared/shared';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  backgroundImage!: string;

  http = inject(HttpClient);
  router = inject(Router);

  loading = signal(false);
  loginSuccess = signal(false);
  loginFailed = signal(false);



  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    this.backgroundImage = backgroundImages[randomIndex];
  }

  onSubmit() {
    if (this.loginForm.valid) {
      localStorage.removeItem('jwtToken'); //make sure we don't have old token left
      this.loading.set(true);
      const formValue = this.loginForm.value;
      this.http.post(environment.apiUrl + '/auth/login', formValue).subscribe({
        next: (response: any) => {
          if(response.result){
            console.log('Login successful.');
            localStorage.setItem('jwtToken', response.data.token);
            this.loginSuccess.set(true);
            this.router.navigate(['/dashboard']);
          }
          this.loading.set(false);
          this.loginFailed.set(true);
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          this.loading.set(false);
          this.loginFailed.set(true);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
