import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AuthModule } from '@auth0/auth0-angular'
import { NavbarComponent } from 'apps/coffeelogger/src/app/components/navbar/navbar.component'




@Component({
  selector: 'coffeelogger-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AuthModule],
  template: `<app-navbar/> <router-outlet></router-outlet> `,
})
export class AppComponent { }
