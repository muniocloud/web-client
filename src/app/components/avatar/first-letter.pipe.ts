import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  pure: true,
  name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: string) {
    return value[0].toUpperCase();
  }
}