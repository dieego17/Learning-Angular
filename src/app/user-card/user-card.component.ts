import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = 'Diego';
  surname = 'Rubio';
  age = 21;
  married = false;
  address = {  
    street:'Calle Falsa',
    city:'Springfield',
    country:'USA'
  };
  private dni = '12345678A';
  public nacionalidad = 'Española';

  getDate(){
    return new Date();
  }
}
