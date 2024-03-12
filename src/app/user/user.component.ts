import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent, UserCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Diego';
  isLoggedIn = false; // esta funcionando como un estado

  greet() {
    alert('Hola ' + this.username);
  }
}
