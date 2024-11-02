import { Component, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = 'yousef@gmail.com';
  password = 'Y123';

  constructor(private router: Router) {}

  onLogin(form: any) {
    const { email, password } = form.value;

    if (email === this.email && password === this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid email or password');
    }
  }
}




