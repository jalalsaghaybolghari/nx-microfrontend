import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserPanelComponent } from '../user-panel/user-panel.component';

import { Router } from '@angular/router';
import { LoginResult } from '@libs/auth';
import { AuthCommonService } from '@libs/auth';
import { DxButtonModule, DxToolbarModule } from 'devextreme-angular';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [DxToolbarModule, DxButtonModule, UserPanelComponent],
})
export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: LoginResult | null = null;

  userMenuItems = [
    {
      text: 'Profile',
      icon: 'user',
      onClick: () => {
        this.router.navigate(['/profile']);
      },
    },
    {
      text: 'Logout',
      icon: 'runner',
      onClick: () => {
        this.authService.removeLoginResult();
        this.router.navigate(['/login']);
      },
    },
  ];

  constructor(private authService: AuthCommonService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getLoginResult();
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}
