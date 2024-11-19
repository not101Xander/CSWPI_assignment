import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent, FooterComponent, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pixel_paws';
}
