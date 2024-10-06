import { Component } from '@angular/core';
import { LogoComponent } from "../components/logo/logo.component";

@Component({
  selector: 'app-offline',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './offline.component.html',
  styleUrl: './offline.component.scss'
})
export class OfflineComponent {

}
