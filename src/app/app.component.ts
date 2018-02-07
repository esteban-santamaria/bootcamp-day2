import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	imageUrl: string = 'https://api.adorable.io/avatars/500/300@adorable.io.png';
	baseUrl: string = 'https://api.adorable.io/avatars/500/';
	urlSuffix: string = '@adorable.io.png';

	constructor() {
		setInterval(() => this.generateRandomFace(), 1000);
	}
	generateRandomFace() {
		this.imageUrl = `${this.baseUrl}${this.generateRandomNumber()}${this.urlSuffix}`;
	}

	generateRandomNumber(): string {
		return `${Math.floor(Math.random() * (10000000000000 + 1))}`;
	}
}
