import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FeatureCardComponent, MatIcon, NavbarComponent, HowItWorksComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
