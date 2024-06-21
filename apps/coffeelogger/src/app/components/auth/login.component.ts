import { Component } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular'
import { HlmButtonModule } from 'libs/ui/ui-button-helm/src'
import { map } from 'rxjs'

@Component({
	selector: 'app-login-button',
	imports: [
		HlmButtonModule
	],
	template: '<button hlmBtn (click)="login()">Log in</button>',
	standalone: true
})
export class LoginButtonComponent {
	constructor(private auth: AuthService) { }

	login() {
		console.log("login")
		this.auth.loginWithRedirect().pipe(
			map((val, idx) => console.log("got userrr", val, idx))
		)
			.subscribe()
	}
}