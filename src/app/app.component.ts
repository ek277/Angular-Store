import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  name = 'Erick';
  age = 18;
  img =
    'https://upload.wikimedia.org/wikipedia/commons/b/b4/UEFA_Women%27s_Champions_League_Logo_2.png';
  btnDisabled = true;
  person = {
    name: 'Erick',
    age: 18,
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/UEFA_Women%27s_Champions_League_Logo_2.png',
  };

  names: string[] = ['Nicolas', 'Juli', 'Santi'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.png',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.png',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.png',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.png',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.png',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.png',
    },
  ];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
