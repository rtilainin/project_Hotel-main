import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguage = 'FR';

  constructor() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }
  }

  getLanguage() {
    return this.selectedLanguage;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
  }
}
