import { Component } from '@angular/core';
import { SessionCreatorComponent } from "./sessions-creator/sessions-creator.component";

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [SessionCreatorComponent],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent {

}
