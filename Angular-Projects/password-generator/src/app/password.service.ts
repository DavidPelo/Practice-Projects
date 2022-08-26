import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PasswordService {
  constructor(private data: DataService) {}

  generatePassword(inputValues: any) {
    const pwLength = inputValues.length;
    const numbersOption = inputValues.numbers ? true : false;
    const specialOption = inputValues.sChars ? true : false;
    const capitalizedOption = inputValues.uLetters ? true : false;

    let password = '';

    for (let i = 0; i < pwLength; i++) {
      password += this.generateRandomCharacter(
        numbersOption,
        specialOption,
        capitalizedOption
      );
    }
    return password;
  }

  generateRandomCharacter(
    numbersNeeded: boolean,
    specialsNeeded: boolean,
    capitalsNeeded: boolean
  ) {
    const randomCategory = Math.floor(Math.random() * 4) + 1;
    let randomChar = '';

    function random(categoryArr: string[]) {
      return categoryArr[Math.floor(Math.random() * (categoryArr.length - 1))];
    }

    if (randomCategory === 1 && numbersNeeded) {
      randomChar = random(this.data.numbers);
    } else if (randomCategory === 2 && specialsNeeded) {
      randomChar = random(this.data.specialCharacters);
    } else if (randomCategory === 3 && capitalsNeeded) {
      randomChar = random(this.data.uppercaseLetters);
    } else {
      randomChar = random(this.data.lowercaseLetters);
    }

    return randomChar;
  }
}
