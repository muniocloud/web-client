import { Component } from '@angular/core';
import { ConversationsCreatorComponent } from "./conversations-creator/conversations-creator.component";

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [ConversationsCreatorComponent],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.scss'
})
export class ConversationsComponent {

}
