import { Component,OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedLang: string;
  @Input() showLogo: boolean = true;
  @Input() showText: boolean = false;

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    // Définir la langue par défaut
   // this.translate.setDefaultLang('en');
     // Définir la langue par défaut
     this.selectedLang = 'FR';
     this.translate.setDefaultLang(this.selectedLang);
  }

  /*switchLanguage(language: string) {
    this.selectedLang = language;
    this.translate.use(language);
  }*/


  getLangImage(): string {
    switch (this.selectedLang) {
      case 'FR':
        return 'assets/images/language/fr.png';
      case 'AR':
        return 'assets/images/language/ma.png';
      default:
        return 'assets/images/language/usa.png';
    }
  }
 

  // getLangImage(): string {
  //   switch (this.selectedLang) {
  //     case 'fr':
  //       console.log(this.selectedLang);
  //       return 'src/assets/images/language/fr.png';
  //     case 'ar':
  //       return 'src/assets/images/language/ma.png';
  //     default:
  //       return 'src/assets/images/language/usa.png';
  //   }
  // }
  // selectedLang = 'English';
  // dropdownOpen = true;

  // ngOnInit(): void {
  //   // Forcer l'affichage de la liste au chargement
  //   this.dropdownOpen = true;
  // }

  // toggleDropdown(): void {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }

  // selectLang(lang: string): void {
  //   this.selectedLang = lang;
  //   this.dropdownOpen = false;
  // }


  ngOnInit(): void {
    this.selectedLang = this.languageService.getLanguage();
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
    this.selectedLang = language;
    this.translate.use(language);
  }
}
