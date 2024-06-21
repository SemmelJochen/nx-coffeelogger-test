import { Component, Inject } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular'
import { DOCUMENT } from '@angular/common'
import { HlmButtonModule } from 'libs/ui/ui-button-helm/src'

@Component({
	selector: 'app-logout-button',
	imports: [
		HlmButtonModule
	],
	template: `
    <button hlmBtn (click)="logout()">
      Log out
    </button>
  `,
	standalone: true
})
export class LogoutButtonComponent {
	constructor(
		@Inject(DOCUMENT) public document: Document,
		private auth: AuthService
	) { }

	logout() {
		this.auth.logout({
			logoutParams: {
				returnTo: this.document.location.origin
			}
		})
	}
}