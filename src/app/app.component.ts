import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app';
	imageUrl: string;
	baseUrl = 'https://api.adorable.io/avatars/500/';
	urlSuffix = '@adorable.io.png';

	constructor() {
		setInterval(() => this.generateRandomFace(), 1000);
	}

	generateRandomFace() {
		this.imageUrl = `${this.baseUrl}${this.generateRandomWord()}${this.urlSuffix}`;
	}

	generateRandomWord(): string {
		return `${Math.floor(Math.random() * (10000000000000 + 1))}`;
	}
}
