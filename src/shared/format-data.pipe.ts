import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any): string {
    if (this.isISODate(value)) {
      const date = new Date(value);
      return `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())} ${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} ${date.getFullYear()}`;
    }
    return value;
  }

  private isISODate(str: string): boolean {
    const isoDatePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z$/;
    return isoDatePattern.test(str);
  }

  private pad(number: number): string {
    return (number < 10) ? '0' + number : '' + number;
  }

}
