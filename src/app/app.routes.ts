import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServiceList } from './pages/service-list/service-list';
import { CreateService } from './pages/create-service/create-service';
import { OrderList } from './pages/order-list/order-list';
import { Profile } from './pages/profile/profile';
import { Chat } from './pages/chat/chat';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { authGuard } from './guards/auth-guard';
import { AppLayoutComponent } from './layouts/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout.component';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { ResetPassword } from './pages/reset-password/reset-password';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: Home },
      { path: 'services', component: ServiceList, canActivate: [authGuard] },
      { path: 'create', component: CreateService, canActivate: [authGuard], data: { role: 'freelancer' } },
      { path: 'orders', component: OrderList, canActivate: [authGuard] },
      { path: 'profile', component: Profile, canActivate: [authGuard] },
      { path: 'chat/:id', component: Chat, canActivate: [authGuard] }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'forgot-password', component: ForgotPassword },
      { path: 'reset-password/:token', component: ResetPassword }


    ]
  }
];
