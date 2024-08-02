import { Component, Input, output } from '@angular/core';
import { Lesson, Session } from '../session.types';
import { SessionProgressComponent } from "../../../../../components/session-progress/session-progress.component";
import { LessonComponent } from './lesson/lesson.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-content',
  standalone: true,
  imports: [SessionProgressComponent, LessonComponent, CommonModule],
  templateUrl: './session-content.component.html',
  styleUrl: './session-content.component.scss'
})
export class SessionContentComponent {
  @Input({ required: true }) session!: Session;
  onFinishSession = output();

  currentLesson: Lesson | null = null;

  ngOnInit() {
    this.currentLesson = this.session.lessonsItens.find(lesson => !lesson.answered) ?? this.session.lessonsItens[0];
  }

  changeLesson(lessonId: number) {
    const selectedLesson = this.session.lessonsItens.find(lesson => lesson.id === lessonId)!;
    this.currentLesson = selectedLesson;
  }

  finishSession() {
    this.onFinishSession.emit();
  }

  handleNextLesson(lessonId: number | null) {
    if (!lessonId) {
      this.finishSession();
      return;
    }

    this.changeLesson(lessonId);
  }
}
