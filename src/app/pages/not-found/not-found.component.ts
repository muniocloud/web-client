import { Component } from '@angular/core';
import { PageErrorComponent } from '../../components/page-error/page-error.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [PageErrorComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
