import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { selectAllRepositories, selectError, selectIsLoading } from '../store';
import { searchRepositories } from '../store/github-repositories.actions';
import { Repository } from '../store/github-repositories.model';

@Component({
	selector: 'app-search-github-repositories',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, RouterModule],
	templateUrl: './search-github-repositories.component.html'
})
export class SearchGithubRepositoriesComponent implements OnDestroy {
	public searchForm: FormGroup<{
		query: FormControl<string>;
	}>;
	public repositories = signal<Repository[]>([]);
	public isLoading = signal<boolean>(false);
	public error = signal<string | null>(null);
	public subscriptions: Subscription[];

	public constructor(
		private fb: FormBuilder,
		private store: Store
	) {
		this.searchForm = this.fb.nonNullable.group({
			query: ['']
		});

		this.subscriptions = [
			this.store
				.select(selectAllRepositories)
				.subscribe(repos => this.repositories.set(repos)),
			this.store
				.select(selectIsLoading)
				.subscribe(isLoading => this.isLoading.set(isLoading)),

			this.store.select(selectError).subscribe(error => this.error.set(error))
		];
	}

	public searchRepositories(): void {
		const query = this.searchForm.controls.query.value.trim();
		this.store.dispatch(searchRepositories({ query }));
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}
}
