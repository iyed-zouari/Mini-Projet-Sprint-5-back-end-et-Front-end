import { Component } from '@angular/core';
import { User } from '../model/User.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  err=0;
  user = new User();
  constructor(private authService : AuthService,
    private router: Router) { }
    onLoggedin()
{
this.authService.login(this.user).subscribe({
next: (data) => {
let jwToken = data.headers.get('Authorization')!;
this.authService.saveToken(jwToken);
this.router.navigate(['/']);
},
error: (err: any) => {
this.err = 1;
}
});
}


}
