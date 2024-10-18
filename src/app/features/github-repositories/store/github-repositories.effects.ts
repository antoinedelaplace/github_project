import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of } from 'rxjs';

import { GithubApiService } from '../services/github-api.service';
import {
	searchRepositories,
	searchRepositoriesError,
	searchRepositoriesSuccess
} from './github-repositories.actions';

@Injectable()
export class GithubRepositoriesEffect {
	constructor(
		private actions$: Actions,
		private githubApiService: GithubApiService
	) {}

	searchRepositoriesByName$ = createEffect(() =>
		this.actions$.pipe(
			ofType(searchRepositories),
			mergeMap(action =>
				this.githubApiService.searchRepositoriesByName(action.query).pipe(
					map(response => searchRepositoriesSuccess({ repos: response.items })),
					catchError(error =>
						of(searchRepositoriesError({ error: error.message }))
					)
				)
			)
		)
	);
}
