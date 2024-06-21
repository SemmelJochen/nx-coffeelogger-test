import { provideFileRouter } from '@analogjs/router'
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http'
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { AuthHttpInterceptor, authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAuth0({
      domain: 'coffee-logger.eu.auth0.com',
      clientId: '8XxY3W3keqBigWp0GG25xqYKDvsElRu9',

      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'http://localhost:3000/api',
      },

    }),
    provideHttpClient(
      withInterceptors([authHttpInterceptorFn]),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
}
