import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { provideIcons } from '@ng-icons/core'
import {
  lucideCode,
  lucideCog,
  lucideGithub,
  lucideHelpCircle,
  lucideKeyboard,
  lucideLayers,
  lucideLogOut,
  lucideMail,
  lucideMessageSquare,
  lucidePlus,
  lucidePlusCircle,
  lucideSmile,
  lucideUser,
  lucideUserCircle,
} from '@ng-icons/lucide'
import { HlmButtonModule } from 'libs/ui/ui-button-helm/src'
import { HlmIconModule } from 'libs/ui/ui-icon-helm/src'
import { HlmMenuModule } from 'libs/ui/ui-menu-helm/src'

@Component({
  selector: 'app-user-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    HlmMenuModule,
    HlmIconModule,
    HlmButtonModule
  ],
  providers: [
    provideIcons({
      lucideUser,
      lucideLayers,
      lucideCog,
      lucideKeyboard,
      lucideUserCircle,
      lucideSmile,
      lucidePlus,
      lucideGithub,
      lucideHelpCircle,
      lucideCode,
      lucideLogOut,
      lucideMail,
      lucideMessageSquare,
      lucidePlusCircle,
    }),
  ],
  templateUrl: './user-dropdown.component.html',
})
export class UserDropdownComponent { }
