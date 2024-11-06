import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, take } from 'rxjs';
import { IdentityApiService } from '../../services';
import { LoginInput } from '../../identity.model';
import { MessageService } from '@libs/shared';
import { AuthCommonService } from '@libs/auth';
import {
  DxFormComponent,
  DxFormModule,
  DxFormTypes,
} from 'devextreme-angular/ui/form';
import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';
import { DxButtonModule } from 'devextreme-angular';

type EditorOptions = DxTextBoxTypes.Properties;

@Component({
  selector: 'app-loign',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [DxFormModule, DxButtonModule],
  providers: [],
})
export class LoginComponent {
  constructor(
    private authApiService: IdentityApiService,
    private authCommonService: AuthCommonService,
    private messageService: MessageService,
    private router: Router
  ) {}
  @ViewChild(DxFormComponent, { static: true }) form!: DxFormComponent;
  formData = { username: '', password: '' }; // Initialize formData properly

  onLoginFormSubmit(e: any) {
    e.preventDefault();
    if (this.form.instance.validate().isValid) {
      const loginInput = new LoginInput();
      loginInput.username = this.form.instance
        .getEditor('username')
        ?.option('value') as string;
      loginInput.password = this.form.instance
        .getEditor('password')
        ?.option('value') as string;

      this.authApiService
        .login(loginInput)
        .pipe(
          take(1),
          map((res) => {
            this.authCommonService.setLoginResult(res);
            this.router.navigate(['/']);
          }),
          catchError((error) => {
            this.messageService.toastErrorMessage(error.error, 'error');
            return EMPTY;
          })
        )
        .subscribe();
    }
  }

  colCountByScreen: DxFormTypes.GroupItem['colCountByScreen'] = {
    xs: 2,
    sm: 2,
    md: 2,
    lg: 2,
  };
  onRegisterButtonClick() {
    this.router.navigate(['/register']);
  }
  changePasswordMode = (name: string) => {
    const editor = this.form.instance.getEditor(name);
    editor?.option(
      'mode',
      editor.option('mode') === 'text' ? 'password' : 'text'
    );
  };
  passwordEditorOptions: EditorOptions = {
    mode: 'password',
    valueChangeEvent: 'keyup',
    buttons: [
      {
        name: 'password',
        location: 'after',
        options: {
          stylingMode: 'text',
          icon: 'fa-regular fa-eye',
          onClick: () => this.changePasswordMode('password'),
        },
      },
    ],
  };
}
