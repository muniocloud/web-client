import { Component } from '@angular/core';
import { HighlightComponent } from '../../components/highlight/highlight.component';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HighlightComponent, MatIcon, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
