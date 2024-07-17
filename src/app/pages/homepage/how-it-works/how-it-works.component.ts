import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../../components/feature-card/feature-card.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'homepage-how-it-works',
  standalone: true,
  imports: [FeatureCardComponent, MatIconModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

}
