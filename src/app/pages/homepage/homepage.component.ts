import { Component } from '@angular/core';
import { HighlightComponent } from '../../shared/highlight/highlight.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HighlightComponent, MatIcon],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
