import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { provideIcons } from '@ng-icons/core'
import { lucideCross } from '@ng-icons/lucide'
import { BrnMenuModule } from '@spartan-ng/ui-menu-brain'
import { BrnSheetModule } from '@spartan-ng/ui-sheet-brain'
import { BrnTooltipModule } from '@spartan-ng/ui-tooltip-brain'
import { UserDropdownComponent } from 'apps/coffeelogger/src/app/components/user-dropdown/user-dropdown.component'
import { HlmAvatarModule } from 'libs/ui/ui-avatar-helm/src'
import { HlmButtonModule } from 'libs/ui/ui-button-helm/src'
import { HlmIconModule } from 'libs/ui/ui-icon-helm/src'
import { HlmInputModule } from 'libs/ui/ui-input-helm/src'
import { HlmLabelModule } from 'libs/ui/ui-label-helm/src'
import { HlmSheetModule } from 'libs/ui/ui-sheet-helm/src'
import { HlmTooltipModule } from 'libs/ui/ui-tooltip-helm/src'


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
  ],
  providers: [provideIcons({ lucideCross })],

  templateUrl: './navbar.component.html',
})
export class NavbarComponent { }
