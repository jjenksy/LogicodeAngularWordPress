import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

/**
 * This is my pipe filter class that unescapes
 * the html that angular escapes by default
 */
@Pipe({ name: 'keepHtml', pure: false})
export class EscapeHtml implements PipeTransform{


  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
