export interface Owner {
	id: string;
	login: string;
}

export interface Contributor {
	login: string;
	id: string;
	contributions: number;
}

export interface Commit {
	sha: string;
	author: Contributor;
}

export interface Repository {
	full_name: string;
	name: string;
	id: string;
	url: string;
	owner: Owner;
}
