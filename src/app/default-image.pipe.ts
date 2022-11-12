import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.trim()) return value;
    else return 'random.jpeg';
  }
}
