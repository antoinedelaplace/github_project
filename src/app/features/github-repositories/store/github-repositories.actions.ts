import { createAction, props } from '@ngrx/store';

import { Repository } from './github-repositories.model';

export const searchRepositories = createAction(
	'[Github Repos] searchRepositories',
	props<{ query: string }>()
);
export const searchRepositoriesSuccess = createAction(
	'[Github Repos] searchRepositories Success',
	props<{ repos: Repository[] }>()
);
export const searchRepositoriesError = createAction(
	'[Github Repos] searchRepositories Error',
	props<{ error: string }>()
);
