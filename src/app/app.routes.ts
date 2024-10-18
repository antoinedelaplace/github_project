import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/homepage/homepage.component').then(
				m => m.HomepageComponent
			)
	},
	{
		path: 'github-repositories',
		loadComponent: () =>
			import(
				'./features/github-repositories/search-github-repositories/search-github-repositories.component'
			).then(m => m.SearchGithubRepositoriesComponent)
	},
	{
		path: 'github-repository-analytics/:owner/:repo',
		loadComponent: () =>
			import(
				'./features/github-repositories/github-repository-analytics/github-repository-analytics.component'
			).then(m => m.GithubRepositoryAnalyticsComponent)
	},
	{
		path: '**',
		loadComponent: () =>
			import('./core/routing/page-not-found/page-not-found.component').then(
				m => m.PageNotFoundComponent
			)
	}
];
