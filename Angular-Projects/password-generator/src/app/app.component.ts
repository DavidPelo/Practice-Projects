import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';

  @ViewChild('f') form!: NgForm;
  generatedPassword = '';
  defaultLength = '8';
  defaultChecked = true;
  inputValues = {
    length: '',
    numbers: '',
    sChars: '',
    uLetters: '',
  };

  constructor(private pwService: PasswordService) {}

  generatePassword() {
    this.inputValues.length = this.form.value.length;
    this.inputValues.numbers = this.form.value.numberSwitch;
    this.inputValues.sChars = this.form.value.specialSwitch;
    this.inputValues.uLetters = this.form.value.capitalizedSwitch;

    this.generatedPassword = this.pwService.generatePassword(this.inputValues);
  }

  onCopy() {
    navigator.clipboard.writeText(this.generatedPassword);
  }
}
