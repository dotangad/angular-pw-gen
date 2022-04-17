import { Component } from '@angular/core';
import { timer, from, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Password Generator';
  password?: string;
  length: number = 0;
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  error?: string;
  message?: string;

  generatePassword() {
    this.error = undefined;
    this.message = undefined;

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    const chars =
      (this.useLetters ? letters : '') +
      (this.useNumbers ? numbers : '') +
      (this.useSymbols ? symbols : '');

    if (chars === '') {
      this.error = 'You must select at least one character type';
      return;
    }

    if (this.length === 0) {
      this.error = 'Length of password must be greater than 0';
      return;
    }

    this.password = Array.from({ length: this.length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
  }
}
