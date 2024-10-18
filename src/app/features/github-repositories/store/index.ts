import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
	GithubRepositoriesState,
	githubCommitsAdapter,
	githubContributorsAdapter,
	githubRepositoriesAdapter
} from './github-repositories.reducer';

export const selectGithubRepositoriesState =
	createFeatureSelector<GithubRepositoriesState>('github-repositories');

export const selectGithubRepositoriesEntityState = createSelector(
	selectGithubRepositoriesState,
	state => state.repositories
);

export const selectGithubContributorsEntityState = createSelector(
	selectGithubRepositoriesState,
	state => state.contributors
);

export const selectGithubCommitsEntityState = createSelector(
	selectGithubRepositoriesState,
	state => state.commits
);

export const selectAllRepositories = githubRepositoriesAdapter.getSelectors(
	selectGithubRepositoriesEntityState
).selectAll;

export const selectAllContributors = githubContributorsAdapter.getSelectors(
	selectGithubContributorsEntityState
).selectAll;

export const selectAllCommits = githubCommitsAdapter.getSelectors(
	selectGithubCommitsEntityState
).selectAll;

export const selectIsLoading = createSelector(
	selectGithubRepositoriesState,
	state => state.isLoading
);

export const selectError = createSelector(
	selectGithubRepositoriesState,
	state => state.error
);
