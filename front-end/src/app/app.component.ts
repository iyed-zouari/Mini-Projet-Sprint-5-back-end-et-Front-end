import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MonProjet';
  constructor (public authService: AuthService, private router: Router) {}


ngOnInit () {
  this.authService.loadToken();
  if (this.authService.getToken()==null ||  this.authService.isTokenExpired())
        this.router.navigate(['/login']);
  }
  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }

}

