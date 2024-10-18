import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Contributor, Repository } from '../store/github-repositories.model';

interface SearchRepositoriesResponse {
	items: Repository[];
}

@Injectable({
	providedIn: 'root'
})
export class GithubApiService {
	private readonly baseUrl = 'https://api.github.com';

	public constructor(private http: HttpClient) {}

	public searchRepositoriesByName(
		query: string
	): Observable<SearchRepositoriesResponse> {
		const searchQuery = encodeURIComponent(`${query} in:name`);

		return this.http.get<SearchRepositoriesResponse>(
			`${this.baseUrl}/search/repositories?q=${searchQuery}`
		);
	}

	public getContributors(
		owner: string,
		repo: string
	): Observable<Contributor[]> {
		return this.http.get<Contributor[]>(
			`${this.baseUrl}/repos/${owner}/${repo}/contributors`
		);
	}
}
