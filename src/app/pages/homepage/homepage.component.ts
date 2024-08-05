import { Component } from '@angular/core';
import { FeatureCardComponent } from '@components/feature-card/feature-card.component';
import { MatIcon } from '@angular/material/icon';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FeedbackBtnComponent } from "../../components/feedback-btn/feedback-btn.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FeatureCardComponent, MatIcon, NavbarComponent, HowItWorksComponent, FeedbackBtnComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
}
