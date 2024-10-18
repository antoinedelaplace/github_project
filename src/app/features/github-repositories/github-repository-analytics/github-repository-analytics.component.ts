import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription, take } from 'rxjs';

import { selectAllContributors, selectError, selectIsLoading } from '../store';
import { loadContributorsOfSelectedRepository } from '../store/github-repositories.actions';
import { Contributor } from '../store/github-repositories.model';

@Component({
	selector: 'app-github-analytics',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './github-repository-analytics.component.html'
})
export class GithubRepositoryAnalyticsComponent implements OnDestroy {
	public contributors = signal<Contributor[]>([]);
	public error = signal<string | null>(null);
	public isLoading = signal<boolean>(false);
	public owner = signal<string>('');
	public repo = signal<string>('');

	public subscriptions: Subscription[];

	public constructor(
		private store: Store,
		private route: ActivatedRoute
	) {
		this.route.paramMap.pipe(take(1)).subscribe(param => {
			this.owner.set(param.get('owner')!);
			this.repo.set(param.get('repo')!);
			this.store.dispatch(
				loadContributorsOfSelectedRepository({
					owner: param.get('owner')!,
					repo: param.get('repo')!
				})
			);
		});

		this.subscriptions = [
			this.store
				.select(selectAllContributors)
				.subscribe(contributors => this.contributors.set(contributors)),
			this.store
				.select(selectIsLoading)
				.subscribe(isLoading => this.isLoading.set(isLoading)),

			this.store.select(selectError).subscribe(error => this.error.set(error))
		];
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}
}
