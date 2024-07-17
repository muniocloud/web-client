import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-page-error',
  standalone: true,
  imports: [],
  templateUrl: './lesson-page-error.component.html',
  styleUrl: './lesson-page-error.component.scss'
})
export class LessonPageErrorComponent {
  @Input({ required: true }) errorMessage!: string;
}
