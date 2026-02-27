import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './core/guards/auth-guard';
import { Categories } from './pages/categories/categories';
import { Reviews } from './pages/reviews/reviews';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'categories',
                component: Categories,
                children: [
                    {
                        path: 'create',
                        component: Categories
                    }
                ]
            },
            {
                path: 'reviews',
                component: Reviews,
                children: [
                    {
                        path: 'create',
                        component: Reviews
                    }
                ]
            }
        ]
    }
];
