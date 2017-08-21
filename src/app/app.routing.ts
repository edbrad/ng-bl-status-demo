import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './home/home.component';
import { SampleroomComponent } from './sampleroom/sampleroom.component';
import { PostalaccountingComponent } from './postalaccounting/postalaccounting.component';
import { DropshippingComponent } from './dropshipping/dropshipping.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/authguard';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sampleroom', component: SampleroomComponent, canActivate: [AuthGuard]},
    { path: 'postalaccounting', component: PostalaccountingComponent, canActivate: [AuthGuard]},
    { path: 'dropshipping', component: DropshippingComponent, canActivate: [AuthGuard]},
    { path: 'sampleroom', component: SampleroomComponent, canActivate: [AuthGuard]},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
    // default route
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
