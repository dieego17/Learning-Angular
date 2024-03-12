import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { AvatarComponent } from './avatar/avatar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, HeaderComponent, TitleComponent, AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Madrid'
}
