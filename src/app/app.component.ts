import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {}
