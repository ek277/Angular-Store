import { Component } from '@angular/core';

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

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }
}
