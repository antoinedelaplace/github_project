import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription, take } from 'rxjs';

import {
	selectAllCommits,
	selectAllContributors,
	selectError,
	selectIsLoading
} from '../store';
import {
	loadCommitsOfSelectedRepository,
	loadContributorsOfSelectedRepository
} from '../store/github-repositories.actions';
import { Commit, Contributor } from '../store/github-repositories.model';

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

	public contributorsOnLastHundredCommits: {
		login: string;
		contributions: number;
	}[] = [];
	private subscriptions: Subscription[];

	public constructor(
		private store: Store,
		private route: ActivatedRoute
	) {
		this.route.paramMap.pipe(take(1)).subscribe(param => {
			const owner = param.get('owner')!;
			const repo = param.get('repo')!;

			this.owner.set(owner);
			this.repo.set(repo);
			this.store.dispatch(
				loadContributorsOfSelectedRepository({
					owner,
					repo
				})
			);
			this.store.dispatch(
				loadCommitsOfSelectedRepository({
					owner,
					repo
				})
			);
		});

		this.subscriptions = [
			this.store
				.select(selectAllContributors)
				.subscribe(contributors => this.contributors.set(contributors)),
			this.store
				.select(selectAllCommits)
				.subscribe(commits => this.computeContributorsImpacts(commits)),
			this.store
				.select(selectIsLoading)
				.subscribe(isLoading => this.isLoading.set(isLoading)),

			this.store.select(selectError).subscribe(error => this.error.set(error))
		];
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	private computeContributorsImpacts(commits: Commit[]): void {
		const committerMap = new Map<string, number>();
		commits.forEach(commit => {
			const login = commit.author?.login;
			if (login) {
				committerMap.set(login, (committerMap.get(login) || 0) + 1);
			}
		});
		this.contributorsOnLastHundredCommits = Array.from(
			committerMap.entries()
		).map(([login, contributions]) => ({
			login,
			contributions
		}));
	}
}
