import { Pipe, PipeTransform } from '@angular/core';

/*
 * Cut the text with a specific number of letters
 * Usage:
 *  value | truncate:words
 * Example:
 *  {{ "Salut c'est moi l'élan" | truncate:5 }}
 *  formats to: "Salut..."
*/

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: String, trunc: number = 50): String {
    let res = value.substring(0, trunc);
    res += (value.length > trunc) ? '...' : '';
    return res;
  }
}
