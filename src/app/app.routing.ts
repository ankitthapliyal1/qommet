import { Routes } from '@angular/router';
import { HomeComponent } from './landingpage/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ActivateUserComponent } from './pages/activate-user/activate-user.component';
import { ChangePasswordComponent } from './pages/login/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PaymetSuccessInvoiceComponent } from './pages/paymet-success-invoice/paymet-success-invoice.component';

import { AuthGuard } from './services/auth/auth.guard';
import { ServerStatusComponent } from './landingpage/server-status/server-status.component';
import { PrivacyPolicyComponent } from './landingpage/privacy-policy/privacy-policy.component';
import { VarifyComponent } from './landingpage/varify/varify.component';
import { TermsOfServicesComponent } from './landingpage/terms-of-services/terms-of-services.component';
import { BlockStorageComponent } from './pages/block-storage/block-storage.component';
import { BlogComponent } from './landingpage/blog/blog.component';
import { GithubSuccesCallbackComponent } from './pages/github-succes-callback/github-succes-callback.component';
import { BlogDetailComponent } from './landingpage/blog-detail/blog-detail.component';
import { SuccessComponent } from './pages/success/success.component';
import { CancleComponent } from './pages/cancle/cancle.component';
import { AboutUsComponent } from './landingpage/about-us/about-us.component';
import { CookiesComponent } from './landingpage/cookies/cookies.component';


export const AppRoutes: Routes = [

  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'verify',
    component: VarifyComponent
  } ,

  {path: '', component:  HomeLayoutComponent,  children: [
    {
      path: 'home',
      component: HomeComponent
    } ,
    {
      path: 'server',
      component: ServerStatusComponent
    } ,
    {
      path: 'privacy',
      component: PrivacyPolicyComponent
    },
    {
      path: 'about',
      component: AboutUsComponent
    },
    {
      path: 'cookies',
      component: CookiesComponent
    },
    {
      path: 'terms',
      component: TermsOfServicesComponent
    },
    {
      path: 'blogs/:slug',
      component: BlogDetailComponent
    },
    
    {
      path: 'blogs',
      component: BlogComponent
    },
    
    
  ]
  },

 

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'changePassword',
    component: ChangePasswordComponent
  },
  { path: 'success/:id', component: SuccessComponent} ,
  { path: 'cancle', component: CancleComponent} ,

  { path: 'payment-success-invoice/:id', component: PaymetSuccessInvoiceComponent},

  { path: 'payment-success/:id', component: PaymentSuccessComponent},
  { path: 'forgot-password/:token', component: ForgotPasswordComponent} ,

  { path: 'guthub-callback', component: GithubSuccesCallbackComponent} ,
  { path: 'activate-email/:id/:token', component: ActivateUserComponent} ,


  
  
  { path: '0',   redirectTo: '0/instanceList', pathMatch: 'full',  canActivate: [AuthGuard], },
  { path: '1',   redirectTo: '1/history', pathMatch: 'full', canActivate: [AuthGuard], },
  { path: '2',   redirectTo: '2/referral', pathMatch: 'full', canActivate: [AuthGuard], },
  { path: '3',   redirectTo: '3/account', pathMatch: 'full', canActivate: [AuthGuard], },
  { path: '4',   redirectTo: '4/support', pathMatch: 'full', canActivate: [AuthGuard], },
 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule), canActivate: [AuthGuard],
  }]},
  
  {
    path: '**',
    redirectTo: 'home'
  }
]
