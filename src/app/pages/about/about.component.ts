import { Component, Pipe } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DomSanitizer } from '@angular/platform-browser';
import { UrlSafePipe } from '../../pipes/url-safe-pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatListModule, MatCardModule, UrlSafePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  
  videoList = [
    'https://www.youtube.com/embed/735r_ho18EE',
    'https://www.youtube.com/embed/Ol4pyg5eQu0',
    'https://www.youtube.com/embed/moCUC1B7K8Q',
    'https://www.youtube.com/embed/Tp3ZT0javRQ',
    'https://www.youtube.com/embed/IkhS15WkrSM',
  ];
}