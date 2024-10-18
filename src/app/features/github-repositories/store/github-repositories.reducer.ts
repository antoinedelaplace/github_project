import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
	loadContributorsOfSelectedRepository,
	loadContributorsOfSelectedRepositoryError,
	loadContributorsOfSelectedRepositorySuccess,
	searchRepositories,
	searchRepositoriesError,
	searchRepositoriesSuccess
} from './github-repositories.actions';
import { Contributor, Repository } from './github-repositories.model';

export const githubRepositoriesAdapter = createEntityAdapter<Repository>();
export const githubContributorsAdapter = createEntityAdapter<Contributor>();

export interface GithubRepositoriesState {
	repositories: EntityState<Repository>;
	contributors: EntityState<Contributor>;
	isLoading: boolean;
	error: string;
}

export const initialState = {
	repositories: githubRepositoriesAdapter.getInitialState(),
	isLoading: false,
	error: '',
	contributors: githubContributorsAdapter.getInitialState()
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
	}))
);
