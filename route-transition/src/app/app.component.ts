import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {fader} from "./pages/route-animations";

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
          <nav class="navigation">
              <ul>
                  <li><a routerLink="home" routerLinkActive="active">Home</a></li>
                  <li><a routerLink="news" routerLinkActive="active">News</a></li>
                  <li><a routerLink="about" routerLinkActive="active">About</a></li>
              </ul>
          </nav>
          <!-- The name of the property @routeAnimations must match the Trigger name, in this case in route-animations.ts -->
          <main [@routeAnimations]="prepareRoute(routerOutlet)" class="content">
              <router-outlet #routerOutlet="outlet"></router-outlet>
          </main>
      </div>
  `,
  styles: [`
    .container {
      --primary: #2c8bcc;
      --secondary: #E96D63;

      margin: min(15vh, 3rem) auto;
      width: clamp(30rem, 50vw, 50rem);
      background-color: white;
    }

    .navigation {
      background-color: var(--secondary);
    }

    .navigation ul {
      display: flex;
      gap: 1rem;
    }

    .navigation ul li {
      padding: 1rem 2rem;
      list-style: none;

    }

    .navigation ul li a {
      color: var(--primary);
      font-weight: bold;
      font-size: 1.6rem;
      text-decoration: none;
    }

    .navigation ul li a.active {
      color: var(--secondary);
      filter: brightness(200%);
    }
  `],
  animations: [
    fader
  ]
})
export class AppComponent {

  prepareRoute(routerOutlet: RouterOutlet) {
    return routerOutlet?.activatedRoute?.url;
  }
}
