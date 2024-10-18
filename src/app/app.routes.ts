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
		path: 'users',
		loadComponent: () =>
			import('./features/users/users.component').then(m => m.UsersComponent)
	},
	{
		path: 'files',
		loadComponent: () =>
			import('./features/google-drive-files/google-drive-files.component').then(
				m => m.GoogleDriveFilesComponent
			)
	},
	{
		path: 'google-redirect',
		loadComponent: () =>
			import(
				'./features/google-drive-files/google-auth-redirect.component'
			).then(m => m.GoogleAuthRedirectComponent)
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
