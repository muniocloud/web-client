import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-error',
  standalone: true,
  imports: [],
  templateUrl: './page-error.component.html',
  styleUrl: './page-error.component.scss'
})
export class PageErrorComponent {
  @Input({ required: false }) title: string = 'Sorry. Something is wrong.';
  @Input({ required: true }) errorMessage!: string;
}
