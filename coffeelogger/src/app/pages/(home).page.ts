import { Component } from '@angular/core'

import { AnalogWelcomeComponent } from './analog-welcome.component'

@Component({
  selector: 'coffeelogger-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <coffeelogger-analog-welcome/>
  `,
})
export default class HomeComponent {
}
