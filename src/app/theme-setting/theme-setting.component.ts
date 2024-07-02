import { Component, OnInit, Renderer2,AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

declare var bootstrap: any; // Déclarer bootstrap globalement


@Component({
  selector: 'app-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.css'
  ]
})
export class ThemeSettingComponent  implements AfterViewInit {

  deferredPrompt: any;

  constructor(private router: Router,
    private renderer: Renderer2
  ) {}

  // ngOnInit() {
  //  // this.loadThemeFromLocalStorage();
  // }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.theme-icon');
    elements.forEach(i => {
      i.addEventListener('click', function () {
        elements.forEach(j => j.classList.toggle('show'));
      });
    });

    const themeBtnParent = document.querySelector(".theme-option");
    const rtlBtn = document.querySelector("#rtl-btn") as HTMLElement;
    const darkBtn = document.querySelector("#dark-btn") as HTMLElement;
    const html = document.querySelector("html") as HTMLElement;
    const rtlLink = document.querySelector("#rtl-link") as HTMLLinkElement;
    const darkLink = document.querySelector("#change-link") as HTMLLinkElement;
    const homeBtn = document.querySelector('#home-btn') as HTMLElement;

    
    themeBtnParent?.addEventListener("click", (e) => {
      e.preventDefault();
      const clicked = (e.target as HTMLElement).closest(".theme-setting-button")?.id;
      if (!clicked) return;

      if (clicked === "rtl-btn") {
        rtlBtn.id = "ltr-btn";
        html.setAttribute("dir", "rtl");
        rtlLink.href = "assets/css/vendors/bootstrap.rtl.css";
        rtlBtn.classList.add("rtlBtnEl");
        localStorage.setItem("rtlcss", "assets/css/vendors/bootstrap.rtl.css");
        localStorage.setItem("dir", "rtl");
        localStorage.setItem("rtlBtnId", "ltr-btn");
      }

      if (clicked === "ltr-btn") {
        rtlBtn.id = "rtl-btn";
        html.setAttribute("dir", "");
        rtlLink.href = "assets/css/vendors/bootstrap.css";
        localStorage.setItem("rtlcss", "assets/css/vendors/bootstrap.css");
        localStorage.setItem("dir", "ltr");
        localStorage.setItem("rtlBtnId", "rtl-btn");
      }

      if (clicked === "dark-btn") {
        darkBtn.id = "light-btn";
        html.className = "dark";
        darkLink.href = "assets/css/dark.css";
        localStorage.setItem("body", "dark");
        localStorage.setItem("layoutcss", "assets/css/dark.css");
        localStorage.setItem("darkId", "light-btn");

        ///////////////////////
        this.setClassForElement('html', 'dark');
        this.setElementId('#dark-btn', 'light-btn');
        this.loadCSS('assets/css/dark.css');
      }

      if (clicked === "light-btn") {
        darkBtn.id = "dark-btn";
       darkLink.href = "assets/css/style.css";
        html.className = "light";
        localStorage.setItem("body", "light");
        localStorage.setItem("layoutcss", "assets/css/style.css");
        localStorage.setItem("darkId", "dark-btn");

        //////////////////////////////////////:
        this.setClassForElement('html', 'light');
        this.setElementId('#dark-btn', 'dark-btn');
        this.loadCSS('assets/css/style.css');
   
      }

      // if (clicked === 'home-btn') {
      //   this.showPopup();
      // }
     

    });
    
    // homeBtn.addEventListener('click', () => {
    //   console.log('yassine 1 ');

    //   this.showOffcanvas();
    // });

    if (homeBtn) {
      homeBtn.addEventListener('click', () => {
        this.showOffcanvas();
      });
    }

    // Initialize theme settings from localStorage
    rtlBtn.id = localStorage.getItem("rtlBtnId") ?? "rtl-btn";
    html.setAttribute("dir", localStorage.getItem("dir") ?? "");
    if (rtlLink) {
      rtlLink.href = localStorage.getItem("rtlcss") ?? "assets/css/vendors/bootstrap.css";
    }

    darkBtn.id = localStorage.getItem("darkId") ?? "dark-btn";
    html.className = localStorage.getItem("body") ?? "";
    if (darkLink) {
      darkLink.href = localStorage.getItem("layoutcss") ?? "assets/css/style.css";
    }



 //   Add to Home Screen Popup
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton();
    });

    const installApp = document.getElementById('installApp');
    if (installApp) {
      installApp.addEventListener('click', async () => {
        if (this.deferredPrompt) {
          try {
            await this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            if (outcome === 'accepted') {
              console.log('User accepted the installation prompt.');
            } else {
              console.log('User dismissed the installation prompt.');
            }
            this.deferredPrompt = null;
            this.hideInstallButton();
          } catch (error) {
            console.error('Failed to prompt the installation:', error);
          }
        }
      });
    }


    // Offcanvas Popup   show dialog first stap
    // window.addEventListener('load', (event) => {
    //   const myOffcanvas = document.getElementById('offcanvas');
    //   if (myOffcanvas) {
    //     const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    //     bsOffcanvas.show();
    //   }
    // });

  }

  
  loadCSS(href: string) {
    let link = document.querySelector(`link[data-theme="theme"]`) as HTMLLinkElement;
    if (link) {
      link.href = href;
    } else {
      link = this.renderer.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.dataset['theme'] = 'theme';
      this.renderer.appendChild(document.head, link);
    }
  }

  setClassForElement(selector: string, className: string) {
    const element = document.querySelector(selector);
    if (element) {
      element.className = className;
    }
  }
  setElementId(selector: string, id: string) {
    const element = document.querySelector(selector) as HTMLElement | null;
    if (element) {
      element.id = id;
    }
  }


  // showPopup() {
  //   const offcanvas = document.querySelector('#offcanvas') as HTMLElement;
  //   if (offcanvas) {
  //     offcanvas.classList.add('show');
  //     offcanvas.style.visibility = 'visible';
  //     offcanvas.style.transform = 'translateY(0)';
  //   }
  // }



  showInstallButton() {
    const installApp = document.getElementById('installApp') as HTMLElement;
    console.log('yassine')

    if (installApp) {
      installApp.style.display = 'block';
    }
  }

  hideInstallButton() {
    const installApp = document.getElementById('installApp') as HTMLElement;
    if (installApp) {
      installApp.style.display = 'none';
    }
  }

  // showOffcanvas() {
  //   console.log('yassine 10 ');
  //   const offcanvas = document.getElementById('offcanvas') as HTMLElement;
  //   if (offcanvas) {
  //     offcanvas.classList.add('show');
  //     offcanvas.style.visibility = 'visible';
  //     offcanvas.style.transform = 'translateY(0)';
  //   }
  // }

 /*  showOffcanvas() {
    const offcanvas = document.getElementById('offcanvas') as HTMLElement;
    if (offcanvas) {
      offcanvas.classList.add('show');
      offcanvas.style.visibility = 'visible';
      offcanvas.style.transform = 'translateY(0)';
  
      // Écouteur d'événement pour le bouton de fermeture
      const closeButton = offcanvas.querySelector('.btn-close') as HTMLElement;
      if (closeButton) {
        closeButton.addEventListener('click', () => this.hideOffcanvas(offcanvas));
      }
  
      // Écouteur d'événement pour détecter les clics en dehors du dialogue
      document.addEventListener('click', (event) => this.handleOutsideClick(event, offcanvas));
    }
  }
  
  hideOffcanvas(offcanvas: HTMLElement) {
    offcanvas.classList.remove('show');
    offcanvas.style.visibility = 'hidden';
    offcanvas.style.transform = 'translateY(100%)';
  
    // Retirer les écouteurs d'événement
    const closeButton = offcanvas.querySelector('.btn-close') as HTMLElement;
    if (closeButton) {
      closeButton.removeEventListener('click', () => this.hideOffcanvas(offcanvas));
    }
    document.removeEventListener('click', (event) => this.handleOutsideClick(event, offcanvas));
  }
  
  handleOutsideClick(event: MouseEvent, offcanvas: HTMLElement) {
    if (!offcanvas.contains(event.target as Node)) {
      this.hideOffcanvas(offcanvas);
    }
  }
   */

  showOffcanvas() {
    const offcanvas = document.getElementById('offcanvas') as HTMLElement;
    if (offcanvas) {
      offcanvas.classList.add('show');
      offcanvas.style.visibility = 'visible';
      offcanvas.style.transform = 'translateY(0)';

      // Écouteur d'événement pour le bouton de fermeture
      const closeButton = offcanvas.querySelector('.btn-close') as HTMLElement;
      if (closeButton) {
        closeButton.addEventListener('click', () => this.hideOffcanvas(offcanvas));
      }

      // Écouteur d'événement pour détecter les clics en dehors du dialogue
      setTimeout(() => {
        document.addEventListener('click', this.handleOutsideClick);
      }, 0);
    }
  }


  hideOffcanvas(offcanvas: HTMLElement) {
    offcanvas.classList.remove('show');
    offcanvas.style.visibility = 'hidden';
    offcanvas.style.transform = 'translateY(100%)';

    // Retirer les écouteurs d'événement
    const closeButton = offcanvas.querySelector('.btn-close') as HTMLElement;
    if (closeButton) {
      closeButton.removeEventListener('click', () => this.hideOffcanvas(offcanvas));
    }
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = (event: MouseEvent) => {
    const offcanvas = document.getElementById('offcanvas') as HTMLElement;
    if (offcanvas && !offcanvas.contains(event.target as Node)) {
      this.hideOffcanvas(offcanvas);
    }
  };



































  // loadThemeFromLocalStorage() {
  //   const rtlMode = localStorage.getItem('dir') === 'rtl';
  //   const darkMode = localStorage.getItem('body') === 'dark';

  //   if (rtlMode) {
  //     this.setRtlMode();
  //   } else {
  //     this.setLtrMode();
  //   }

  //   if (darkMode) {
  //     console.log('yassine 1 ')
  //     this.setDarkMode();
  //   } else {
  //     console.log('yassine 2 ')

  //     this.setLightMode();
  //   }
  // }

  // setRtlMode() {
    
  //   this.setAttributeForElement('html', 'dir', 'rtl');
  //   this.setElementId('#rtl-btn', 'ltr-btn');
  //   this.addClassToElement('#rtl-btn', 'rtlBtnEl');
  //   localStorage.setItem('dir', 'rtl');
  //   localStorage.setItem('rtlBtnId', 'ltr-btn');
  // }

  // setLtrMode() {
  //   this.setAttributeForElement('html', 'dir', '');
  //   this.setElementId('#rtl-btn', 'rtl-btn');
  //   this.removeClassFromElement('#rtl-btn', 'rtlBtnEl');
  //   localStorage.setItem('dir', 'ltr');
  //   localStorage.setItem('rtlBtnId', 'rtl-btn');
  // }

  // setDarkMode() {
  //   console.log('yassine 3 ')  
  //   this.setClassForElement('html', 'dark');
  //   this.setElementId('#dark-btn', 'light-btn');
  //   this.loadCSS('assets/css/dark.css');
  //   localStorage.setItem('body', 'dark');
  //   localStorage.setItem('darkId', 'light-btn');
  //   localStorage.setItem("layoutcss", "assets/css/dark.css");

  // }

  // setLightMode() {
  //   console.log('yassine 4 ')

  //   this.setClassForElement('html', 'light');
  //   this.setElementId('#dark-btn', 'dark-btn');
  //   this.loadCSS('assets/css/style.css');
  //   localStorage.setItem('body', 'light');
  //   localStorage.setItem('darkId', 'dark-btn');
  // }


  // toggleRtlMode() {
  //   const rtlBtn = document.querySelector("#rtl-btn") as HTMLElement | null;
  //   if (rtlBtn?.id === 'rtl-btn') {
  //     this.setRtlMode();
  //   } else {
  //     this.setLtrMode();
  //   }
  // }

  // toggleDarkMode() {
  //   const darkBtn = document.querySelector("#dark-btn") as HTMLElement;
  //   console.log(darkBtn);
  //   if (darkBtn?.id === 'dark-btn') {
  //     this.setDarkMode();
  //   } else {
  //     this.setLightMode();
  //   }
  // }

  // toggleThemeIcons() {
  //   const elements = document.querySelectorAll('.theme-icon');
  //   elements.forEach(i => {
  //     i.classList.toggle('show');
  //   });
  // }

  // setAttributeForElement(selector: string, attribute: string, value: string) {
  //   const element = document.querySelector(selector);
  //   if (element) {
  //     element.setAttribute(attribute, value);
  //   }
  // }

  // addClassToElement(selector: string, className: string) {
  //   const element = document.querySelector(selector) as HTMLElement | null;
  //   if (element) {
  //     element.classList.add(className);
  //   }
  // }

  // removeClassFromElement(selector: string, className: string) {
  //   const element = document.querySelector(selector) as HTMLElement | null;
  //   if (element) {
  //     element.classList.remove(className);
  //   }
  // }
}