import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from "../logo/logo.component"; 
import { MatButtonModule } from '@angular/material/button'; 
import { RouterLink } from '@angular/router';
import { LoginModule } from '../../auth/login/login.module';
import { SignUpModule } from '../../auth/signup/signup.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, LogoComponent, MatButtonModule, LoginModule, SignUpModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
