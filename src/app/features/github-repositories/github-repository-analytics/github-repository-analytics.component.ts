import { CommonModule } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	ViewChild,
	signal
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Subscription, take } from 'rxjs';

import * as d3 from 'd3';

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
export class GithubRepositoryAnalyticsComponent
	implements AfterViewInit, OnDestroy
{
	public contributors = signal<Contributor[]>([]);
	public error = signal<string | null>(null);
	public isLoading = signal<boolean>(false);
	public owner = signal<string>('');
	public repo = signal<string>('');

	public contributorsOnLastHundredCommits: {
		login: string;
		contributions: number;
	}[] = [];
	private subscriptions: Subscription[] = [];
	@ViewChild('timeline', { static: true })
	private timelineContainer!: ElementRef;

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
	}

	public ngAfterViewInit(): void {
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
		if (commits.length) {
			this.createCommitsTimeline(commits);
		}
	}

	private createCommitsTimeline(commits: Commit[]): void {
		const svg = d3
			.select(this.timelineContainer.nativeElement)
			.append('svg')
			.attr('width', 800)
			.attr('height', 400);

		const dates = commits.map(commit => new Date(commit.commit.author.date));
		const dateCounts = dates.reduce(
			(acc, date) => {
				const formattedDate = d3.timeFormat('%Y-%m-%d')(date);
				acc[formattedDate] = (acc[formattedDate] || 0) + 1;
				return acc;
			},
			{} as Record<string, number>
		);

		const data = Object.entries(dateCounts).map(([date, count]) => ({
			date: new Date(date),
			count
		}));

		const xScale = d3
			.scaleTime()
			.domain(d3.extent(data, d => d.date) as [Date, Date])
			.range([0, 750]);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data, d => d.count) as number])
			.range([350, 0]);

		const xAxis = d3.axisBottom(xScale).ticks(10);
		const yAxis = d3.axisLeft(yScale).ticks(5);

		svg.append('g').attr('transform', 'translate(50, 350)').call(xAxis);

		svg.append('g').attr('transform', 'translate(50, 0)').call(yAxis);

		const line = d3
			.line<{ date: Date; count: number }>()
			.x(d => xScale(d.date) + 50)
			.y(d => yScale(d.count))
			.curve(d3.curveMonotoneX);

		svg
			.append('path')
			.datum(data)
			.attr('fill', 'none')
			.attr('stroke', '#42A5F5')
			.attr('stroke-width', 2)
			.attr('d', line);
	}
}
