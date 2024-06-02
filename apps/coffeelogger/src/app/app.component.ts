import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from 'apps/coffeelogger/src/app/components/navbar/navbar.component'




@Component({
  selector: 'coffeelogger-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `<app-navbar/> <router-outlet></router-outlet> `,
})
export class AppComponent { }
