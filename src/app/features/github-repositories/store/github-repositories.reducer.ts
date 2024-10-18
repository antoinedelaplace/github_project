import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
	searchRepositories,
	searchRepositoriesError,
	searchRepositoriesSuccess
} from './github-repositories.actions';
import { Repository } from './github-repositories.model';

export const githubRepositoriesAdapter = createEntityAdapter<Repository>();

export interface GithubRepositoriesState {
	repositories: EntityState<Repository>;
	isLoading: boolean;
	error: string;
}

export const initialState = {
	repositories: githubRepositoriesAdapter.getInitialState(),
	isLoading: false,
	error: ''
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
	}))
);
