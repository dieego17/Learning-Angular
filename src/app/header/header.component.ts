import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [TitleComponent]
})
export class HeaderComponent /* implements  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy */{

  pageTitle = 'Mi app';

  constructor() { 
    console.log('Constructor ha sido ejecutado');
  }

  onDataCheck(e: any) {
    console.log(e);
  }

  /* este hook se llama al inicio y cada vez que Angular detecta un cambio en los inputs del componente */
  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ha sido ejecutado');
  } */
  /* este hook te permite inicializar el componente una vez ha recibido las propiedades de entrada. */
  /* ngOnInit(): void {
    console.log('ngOnInit ha sido ejecutado');
  } */
  /* este hook se llama cada vez que Angular comprueba los cambios en el componente. */
  /* ngDoCheck(): void {
    console.log('ngDoCheck ha sido ejecutado');
  } */

  /* se ejecuta una sola vez, justo después de que Angular proyecte contenido externo en la vista del componente */
  /* ngAfterContentInit(): void {
    console.log('ngAfterContentInit ha sido ejecutado');
  } */

  /* se ejecuta después de que Angular compruebe el contenido proyectado en el componente. */
  /* ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ha sido ejecutado');
  } */

  /* se llama una única vez, tras inicializar las vistas y sub-vistas del componente */
  /* ngAfterViewInit(): void {
    console.log('ngAfterViewInit ha sido ejecutado');
  } */

  /* se llama después de comprobar los cambios de las vistas y sub-vistas del componente */
  /* ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ha sido ejecutado');
  } */

  /* se llama solo una vez, justo antes de que Angular destruya el componente */
  /* ngOnDestroy(): void {
    console.log('ngOnDestroy ha sido ejecutado');
  } */

}
