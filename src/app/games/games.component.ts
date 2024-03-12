import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Juegos favoritos de {{ username }}</h3>
    <ul>
      <!-- for para recorrer games y le indicamos el identificador unico de cada juego -->
      @for (game of games; track game.id) {
        <li>{{ game.name }}</li>    
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'The Last of Us'
    },
    {
      id: 3,
      name: 'God of War'
    }
    
  ];
}
