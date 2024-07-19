import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translate: TranslateService,private languageService: LanguageService) {
    
  }

  ngOnInit(): void {
    const selectedLang = this.languageService.getLanguage();
    // Use the selected language for your component's logic
  }


}
