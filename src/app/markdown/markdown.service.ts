import { Injectable } from '@angular/core';
import markdownit from 'markdown-it';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  convertTextToHTML(text: string) {
    return markdownit().render(text);
  }
}
