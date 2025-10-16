import { Component, HostListener } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css']
})
export class Accueil {
  // Images
  fond480 = 'assets/images/fond.jpg';
  fond768 = 'assets/images/fond.jpg';
  fond1024 = 'assets/images/fond.jpg';
  fond1440 = 'assets/images/fond.jpg';

  livre1 = 'assets/images/livre-1.jpg';
  livre2 = 'assets/images/livre-2.jpg';
  livre3 = 'assets/images/livre-3.jpg';
  livre4 = 'assets/images/livre-4.jpg';
  DG = 'assets/images/DG.jpeg';
  logo1 = 'assets/iconss/logo1.png';
  logo2 = 'assets/iconss/logo00.jpg';
  logo3 = 'assets/iconss/logo-fs.jpeg';
  logo4 = 'assets/iconss/logo4.jpg';
  logo5 = 'assets/iconss/logos2.jpeg';
  logo6 = 'assets/iconss/logo5 (2).png';

  private lastScrollTop = 0;

  // Méthode pour gérer le menu
  toggleMenu() {
    const menu = document.querySelector(".info");
    if (menu) {
      menu.classList.toggle('show');
    }
  }

  // Listener sur le scroll de la fenêtre
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    const scrollTop = window.scrollY;
    if (scrollTop > this.lastScrollTop) {
      // Défilement vers le bas → cacher header
      header.classList.add('hide-head');
    } else {
      // Défilement vers le haut → afficher header
      header.classList.remove('hide-head');
    }
    this.lastScrollTop = scrollTop;
  }
}
