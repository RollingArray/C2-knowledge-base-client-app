import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Pipe({ name: 'selectMenu' })

export class MenuSelectPipe implements PipeTransform
{
    /**
     * Creates an instance of menu select pipe.
     * @param activatedRoute 
     */
    constructor(
        public activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
    )
    { }
    
    /**
     * Transforms menu select pipe
     * @param menuText 
     * @returns  
     */
    transform(menuText: string, activeArticleId: string)
    {
        const transformMenuText = menuText!.trim().toLowerCase().replace(/ /g, "-");

        if (transformMenuText === activeArticleId)
        {
            return this.sanitizer.bypassSecurityTrustHtml(`<b>${menuText}</b>`);
        }
        else
        {
            return menuText;
        }
    }
}