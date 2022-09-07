import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HisenseHvac';

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    const item = localStorage.getItem('language')
    let lang: any;
    if (item){
      lang = localStorage.getItem('language')
    }
    else {
      lang = 'ru'
    }
    translate.setDefaultLang(lang);
  }
}
