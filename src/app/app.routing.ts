import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';
import { MessageListComponent } from './messagelist.component';

const appRoutes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ OktaAuthGuard ],
  },
  {
    path: 'messages',
    component: MessageListComponent,
    canActivate: [ OktaAuthGuard ],
  },
]

export const routing = RouterModule.forRoot(appRoutes);
