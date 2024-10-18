import { Component, OnInit } from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-google-redirect',
	template: `
		<p>Authentification en cours...</p>
	`
})
export class GoogleAuthRedirectComponent implements OnInit {
	public ngOnInit(): void {
		this.extractTokenAndClose();
	}

	private extractTokenAndClose(): void {
		const hash = window.location.hash.substring(1);
		const params = new URLSearchParams(hash);
		const accessToken = params.get('access_token');

		if (accessToken) {
			window.opener?.postMessage({ accessToken }, window.location.origin);
		}

		window.close();
	}
}
