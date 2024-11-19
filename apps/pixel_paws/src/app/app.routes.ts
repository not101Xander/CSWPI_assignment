import { Route } from '@angular/router';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AboutPageComponent } from './components/about/about.component';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/user-list', pathMatch: 'full' },
    {path: 'user-list', component: UserListComponent},
    {path: 'about', component: AboutPageComponent}
];
