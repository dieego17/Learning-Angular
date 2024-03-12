import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnChanges {
  @Input() title = '';
  @Output() datosFromChild = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.datosFromChild.emit('Datos desde el hijo al padre')
  }
}
