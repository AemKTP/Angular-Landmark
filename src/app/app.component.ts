import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { ShowComponent } from './components/show/show.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandmarksComponent, ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})
export class AppComponent {
  title = 'angular-landmarks';
}
