import { Component } from '@angular/core';

@Component({
  selector: 'app-text-comparison',
  templateUrl: './text-comparision.component.html',
  styleUrls: ['./text-comparision.component.css']
})
export class TextComparisonComponent {
  text1: string = '';
  text2: string = '';
  differences: string[] = [];

  compareTexts(): void {
    let words1 = this.text1.split(' ');
    let words2 = this.text2.split(' ');

    // Reset differences
    this.differences = [];

    words1.forEach((word, index) => {
      if (words2[index] && word !== words2[index]) {
        this.differences.push(word);
      }
    });

    words2.forEach((word, index) => {
      if (words1[index] !== word && !this.differences.includes(word)) {
        this.differences.push(word);
      }
    });
  }
}
