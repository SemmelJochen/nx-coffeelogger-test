import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { AuthModule, AuthService } from '@auth0/auth0-angular'
import { provideIcons } from '@ng-icons/core'
import { lucideCross } from '@ng-icons/lucide'
import { BrnMenuModule } from '@spartan-ng/ui-menu-brain'
import { BrnSheetModule } from '@spartan-ng/ui-sheet-brain'
import { BrnTooltipModule } from '@spartan-ng/ui-tooltip-brain'
import { LoginButtonComponent } from 'apps/coffeelogger/src/app/components/auth/login.component'
import { UserDropdownComponent } from 'apps/coffeelogger/src/app/components/user-dropdown/user-dropdown.component'
import { HlmAvatarModule } from 'libs/ui/ui-avatar-helm/src'
import { HlmButtonModule } from 'libs/ui/ui-button-helm/src'
import { HlmIconModule } from 'libs/ui/ui-icon-helm/src'
import { HlmInputModule } from 'libs/ui/ui-input-helm/src'
import { HlmLabelModule } from 'libs/ui/ui-label-helm/src'
import { HlmSheetModule } from 'libs/ui/ui-sheet-helm/src'
import { HlmTooltipModule } from 'libs/ui/ui-tooltip-helm/src'
import { map } from 'rxjs'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    BrnMenuModule,
    HlmButtonModule,
    HlmAvatarModule,
    BrnSheetModule,
    HlmSheetModule,
    HlmInputModule,
    HlmIconModule,
    HlmLabelModule,
    HlmTooltipModule,
    BrnTooltipModule,
    UserDropdownComponent,
    LoginButtonComponent,
    AuthModule
  ],
  providers: [provideIcons({ lucideCross })],

  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  auth = inject(AuthService);

  // isLoggedIn = toSignal(this.auth.isAuthenticated$, { initialValue: false });
  constructor() {

  }
  ngOnInit(): void {
    this.auth.user$.pipe(
      map(user => console.log("got user", user))
    ).subscribe()
    this.auth.isLoading$.pipe(
      map(isLoading => console.log("got loading", isLoading))
    ).subscribe()
    this.auth.isAuthenticated$.pipe(
      map(isAuthenticated => console.log("got auth", isAuthenticated))
    ).subscribe()
    // this.auth.getAccessTokenSilently().subscribe(token => console.log("got token", token))
  }
}
