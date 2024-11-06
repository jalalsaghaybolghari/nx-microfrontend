import { Route } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';


export const remoteRoutes: Route[] = [
  {
    path: 'login',
    data: { title: 'Login - Project Management' },
    component: LoginComponent,
  },
  {
    path: 'register',
    data: { title: 'Register - Project Management' },
    component: RegisterComponent,
  },
];
