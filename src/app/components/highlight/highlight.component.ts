import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {
  @Input({ required: true })
  title = '';

  @Input({ required: true })
  description = '';

}
