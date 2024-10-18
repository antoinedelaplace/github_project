import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
	loadCommitsOfSelectedRepositorySuccess,
	loadContributorsOfSelectedRepository,
	loadContributorsOfSelectedRepositoryError,
	loadContributorsOfSelectedRepositorySuccess,
	searchRepositories,
	searchRepositoriesError,
	searchRepositoriesSuccess
} from './github-repositories.actions';
import { Commit, Contributor, Repository } from './github-repositories.model';

export const githubRepositoriesAdapter = createEntityAdapter<Repository>();
export const githubContributorsAdapter = createEntityAdapter<Contributor>();
export const githubCommitsAdapter = createEntityAdapter<Commit>({
	selectId: commit => commit.sha
});

export interface GithubRepositoriesState {
	repositories: EntityState<Repository>;
	contributors: EntityState<Contributor>;
	commits: EntityState<Commit>;
	isLoading: boolean;
	error: string;
}

export const initialState = {
	repositories: githubRepositoriesAdapter.getInitialState(),
	isLoading: false,
	error: '',
	contributors: githubContributorsAdapter.getInitialState(),
	commits: githubCommitsAdapter.getInitialState()
};

export const githubRepositoriesReducer = createReducer(
	initialState,
	on(searchRepositories, state => ({
		...state,
		isLoading: true,
		error: ''
	})),
	on(searchRepositoriesSuccess, (state, { repos }) => ({
		...state,
		isLoading: false,
		repositories: githubRepositoriesAdapter.setAll(repos, state.repositories)
	})),
	on(searchRepositoriesError, (state, { error }) => ({
		...state,
		isLoading: false,
		repositories: githubRepositoriesAdapter.getInitialState(),
		error
	})),
	on(loadContributorsOfSelectedRepository, state => ({
		...state,
		isLoading: true,
		error: ''
	})),
	on(
		loadContributorsOfSelectedRepositorySuccess,
		(state, { contributors }) => ({
			...state,
			isLoading: false,
			contributors: githubContributorsAdapter.setAll(
				contributors,
				state.contributors
			)
		})
	),
	on(loadContributorsOfSelectedRepositoryError, (state, { error }) => ({
		...state,
		isLoading: false,
		error
	})),
	on(loadCommitsOfSelectedRepositorySuccess, (state, { commits }) => ({
		...state,
		commits: githubCommitsAdapter.setAll(commits, state.commits)
	}))
);
