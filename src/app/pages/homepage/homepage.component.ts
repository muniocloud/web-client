import { Component } from '@angular/core';
import { HighlightComponent } from '../../shared/highlight/highlight.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HighlightComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
