import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = heroeBorrado!;
  }
}
