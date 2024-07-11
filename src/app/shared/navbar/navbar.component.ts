import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from "../logo/logo.component"; 
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, LogoComponent, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
