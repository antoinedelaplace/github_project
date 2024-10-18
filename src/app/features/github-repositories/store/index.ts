import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
	GithubRepositoriesState,
	githubRepositoriesAdapter
} from './github-repositories.reducer';

export const selectGithubRepositoriesState =
	createFeatureSelector<GithubRepositoriesState>('github-repositories');

export const selectGithubRepositoriesEntityState = createSelector(
	selectGithubRepositoriesState,
	state => state.repositories
);

export const selectAllRepositories = githubRepositoriesAdapter.getSelectors(
	selectGithubRepositoriesEntityState
).selectAll;

export const selectIsLoading = createSelector(
	selectGithubRepositoriesState,
	state => state.isLoading
);

export const selectError = createSelector(
	selectGithubRepositoriesState,
	state => state.error
);
