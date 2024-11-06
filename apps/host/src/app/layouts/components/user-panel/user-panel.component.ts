import { Component, Input } from '@angular/core';
import { LoginResult } from '@libs/auth';
import { AuthCommonService } from '@libs/auth';
import { DxContextMenuModule, DxListModule } from 'devextreme-angular';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
  standalone: true,
  imports: [DxContextMenuModule, DxListModule],
})
export class UserPanelComponent {
  userFullName: string;
  @Input()
  menuItems: any;

  @Input()
  menuMode!: string;

  @Input()
  user!: LoginResult | null;

  constructor(private authCommonService: AuthCommonService) {
    const loginResult = authCommonService.getLoginResult() as LoginResult;
    this.userFullName = `${loginResult.firstname} ${loginResult.lastname}`;
  }
}
