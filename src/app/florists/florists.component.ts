import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-florists',
  templateUrl: './florists.component.html',
  styleUrls: ['./florists.component.css']
})
export class FloristsComponent implements OnInit{

  constructor(private translate: TranslateService,private languageService: LanguageService) {
  }

  ngOnInit(): void {
    const selectedLang = this.languageService.getLanguage();
    // Use the selected language for your component's logic
  }
}