import { createAction, props } from '@ngrx/store';

import { Commit, Contributor, Repository } from './github-repositories.model';

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

export const loadContributorsOfSelectedRepository = createAction(
	'[Github Repos] loadContributorsOfSelectedRepository',
	props<{ owner: string; repo: string }>()
);

export const loadContributorsOfSelectedRepositorySuccess = createAction(
	'[Github Repos] loadContributorsOfSelectedRepositorySuccess',
	props<{ contributors: Contributor[] }>()
);

export const loadContributorsOfSelectedRepositoryError = createAction(
	'[Github Repos] loadContributorsOfSelectedRepositoryError',
	props<{ error: string }>()
);

export const loadCommitsOfSelectedRepository = createAction(
	'[Github Repos] loadCommitsOfSelectedRepository',
	props<{ owner: string; repo: string }>()
);

export const loadCommitsOfSelectedRepositorySuccess = createAction(
	'[Github Repos] loadCommitsOfSelectedRepositorySuccess',
	props<{ commits: Commit[] }>()
);

export const loadCommitsOfSelectedRepositoryError = createAction(
	'[Github Repos] loadCommitsOfSelectedRepositoryError',
	props<{ error: string }>()
);
