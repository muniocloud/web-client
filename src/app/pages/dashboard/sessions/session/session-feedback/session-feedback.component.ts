import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MarkdownService } from '@src/app/markdown/markdown.service';

@Component({
  selector: 'app-session-feedback',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './session-feedback.component.html',
  styleUrl: './session-feedback.component.scss'
})
export class SessionFeedbackComponent {
  @Input({ required: true }) feedback!: string;
  @Input({ required: true }) rating!: number;

  sessionFeedbackHTML = '';

  constructor(
    private readonly router: Router,
    private readonly markdownService: MarkdownService,
  ) {}

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.sessionFeedbackHTML = this.markdownService.convertTextToHTML(this.feedback);
  }
}
