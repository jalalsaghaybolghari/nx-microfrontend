import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, DxButtonModule],
})
export class PageNotFoundComponent {}
