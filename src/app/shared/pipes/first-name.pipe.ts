import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  pure: true,
  name: 'firstName',
})
export class FirstNamePipe implements PipeTransform {
  transform(value: string) {
    return value.split(' ')[0];
  }
}