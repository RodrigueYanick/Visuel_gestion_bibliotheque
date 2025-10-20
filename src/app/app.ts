// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { trigger, transition, style, animate, query, group } from '@angular/animations';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
//   animations: [
//     trigger('routeAnimations', [
//       transition('* => login, * => register', [
//         style({ position: 'relative' }),
//         query(':enter, :leave', [
//           style({
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%'
//           })
//         ]),
//         query(':enter', [
//           style({ transform: 'translateX(-100%)', opacity: 0 })
//         ]),
//         group([
//           query(':leave', [
//             animate('300ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
//           ]),
//           query(':enter', [
//             animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
//           ])
//         ])
//       ]),
//       transition('login => *, register => *', [
//         style({ position: 'relative' }),
//         query(':enter, :leave', [
//           style({
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%'
//           })
//         ]),
//         query(':enter', [
//           style({ transform: 'translateX(100%)', opacity: 0 })
//         ]),
//         group([
//           query(':leave', [
//             animate('300ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
//           ]),
//           query(':enter', [
//             animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
//           ])
//         ])
//       ])
//     ])
//   ]
// })
// export class App {
//   protected readonly title = signal('Bibliotheque-front-end');
// }


// // app.ts
// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { trigger, transition, style, animate, query, group } from '@angular/animations';
// import { CommonModule } from '@angular/common';
// import { Accueil } from "./pages/accueil/accueil";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, Accueil],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css'],
//   animations: [
//     trigger('routeAnimations', [
//       transition('* => login, * => register', [
//         style({ position: 'relative' }),
//         query(':enter, :leave', [
//           style({
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%'
//           })
//         ]),
//         query(':enter', [
//           style({ transform: 'translateX(-100%)', opacity: 0 })
//         ]),
//         group([
//           query(':leave', [
//             animate('300ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
//           ]),
//           query(':enter', [
//             animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
//           ])
//         ])
//       ]),
//       transition('login => *, register => *', [
//         style({ position: 'relative' }),
//         query(':enter, :leave', [
//           style({
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%'
//           })
//         ]),
//         query(':enter', [
//           style({ transform: 'translateX(100%)', opacity: 0 })
//         ]),
//         group([
//           query(':leave', [
//             animate('300ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
//           ]),
//           query(':enter', [
//             animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
//           ])
//         ])
//       ])
//     ])
//   ]
// })
// export class App {
//   protected readonly title = signal('Bibliotheque-front-end');
// showOverlay: any;
// }



import { Component, signal, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Accueil } from './pages/accueil/accueil';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Accueil],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Bibliotheque-front-end');
  showOverlay = false;

  constructor(private router: Router) {
    effect(() => {
      this.router.events.subscribe(() => {
        const currentUrl = this.router.url;
        this.showOverlay = currentUrl.includes('login') || currentUrl.includes('register');
      });
    });
  }
}