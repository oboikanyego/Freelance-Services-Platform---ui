// import { Routes } from '@angular/router';
// import { ServiceList } from './pages/service-list/service-list';

import { Routes } from '@angular/router';
import { ServiceList } from './pages/service-list/service-list';
import { CreateService } from './pages/create-service/create-service';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { OrderList } from './pages/order-list/order-list';
import { authGuard } from './guards/auth-guard';
import { Profile } from './pages/profile/profile';
import { Chat } from './pages/chat/chat';

export const routes: Routes = [
  {
    path: 'create',
    component: CreateService,
    canActivate: [authGuard],
    data: { role: 'freelancer' } // Only freelancers can create services
  },
  {
    path: 'orders',
    component: OrderList,
    canActivate: [authGuard] // All logged-in users can view orders
  },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  // {
  //   path: 'admin',
  //   component: Admin,
  //   canActivate: [authGuard],
  //   data: { role: 'admin' } // Example for admin-only route
  // },
  // Public routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '', component: ServiceList },
  { path: 'chat/:id', component: Chat, canActivate: [authGuard] }
];
