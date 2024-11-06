import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { NoAuthGuard } from '@libs/auth';



export const appRoutes: Route[] = [
  {
    path: '',
    canActivate:[NoAuthGuard],
    canActivateChild:[NoAuthGuard],
    loadChildren: () => import('identity/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
