import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { GithubRepositoriesEffect } from './features/github-repositories/store/github-repositories.effects';
import { githubRepositoriesReducer } from './features/github-repositories/store/github-repositories.reducer';

import { routes } from './app.routes';
import { errorInterceptor } from './core/api/error.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withInterceptors([errorInterceptor])),
		provideRouter(routes),
		provideStore(),
		provideState({
			name: 'github-repositories',
			reducer: githubRepositoriesReducer
		}),
		provideEffects(GithubRepositoriesEffect),
		provideStoreDevtools()
	]
};
