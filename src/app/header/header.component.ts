import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  selectedLang: string;

  constructor(private translate: TranslateService) {
    // Définir la langue par défaut
   // this.translate.setDefaultLang('en');
     // Définir la langue par défaut
     this.selectedLang = 'fr';
     this.translate.setDefaultLang(this.selectedLang);
  }

  switchLanguage(language: string) {
    this.selectedLang = language;
    this.translate.use(language);
  }


  getLangImage(): string {
    switch (this.selectedLang) {
      case 'fr':
        return 'assets/images/language/fr.png';
      case 'ar':
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



  
}
