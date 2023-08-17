import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./services/interceptor/interceptor.service";
import { AuthGuard } from "./services/auth/auth.guard";
import { ApiService } from "./services/apiService/api.service";
import { ChangePasswordComponent } from './pages/login/change-password/change-password.component';
import {  PaymentSuccessComponent} from './pages/payment-success/payment-success.component';
import { InstanceViewComponent } from './pages/instance/instance-view/instance-view.component';


import { NgxChartsModule }from '@swimlane/ngx-charts';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserTransferStateModule } from "@angular/platform-browser";
import { LoadingComponent } from './pages/loading/loading.component';
import { ActivateUserComponent } from './pages/activate-user/activate-user.component';
import { ForgotPasswordComponent } from "./pages/login/forgot-password/forgot-password.component";
import { HomeComponent } from './landingpage/home/home.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { PaymetSuccessInvoiceComponent } from './pages/paymet-success-invoice/paymet-success-invoice.component';
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { ServerStatusComponent } from './landingpage/server-status/server-status.component';
import { PrivacyPolicyComponent } from './landingpage/privacy-policy/privacy-policy.component';
import { VarifyComponent } from './landingpage/varify/varify.component';
import { ReferralProgramComponent } from './pages/referral-program/referral-program.component';
import { TermsOfServicesComponent } from './landingpage/terms-of-services/terms-of-services.component';
import { BlogComponent } from './landingpage/blog/blog.component';
import { GithubSuccesCallbackComponent } from './pages/github-succes-callback/github-succes-callback.component';
import { BlogDetailComponent } from './landingpage/blog-detail/blog-detail.component';
import { SuccessComponent } from './pages/success/success.component';
import { CancleComponent } from './pages/cancle/cancle.component';
import { AboutUsComponent } from './landingpage/about-us/about-us.component';
import { CookiesComponent } from './landingpage/cookies/cookies.component';

 
  
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ChangePasswordComponent,
    PaymentSuccessComponent,
     InstanceViewComponent,
     ActivateUserComponent,
     ForgotPasswordComponent,
     HomeComponent,
     HeaderComponent,
     FooterComponent,
     HomeLayoutComponent,
     RegisterComponent,
     PaymetSuccessInvoiceComponent,
     ServerStatusComponent,
     PrivacyPolicyComponent,
     VarifyComponent,
     TermsOfServicesComponent,
     GithubSuccesCallbackComponent,
     BlogComponent,
     BlogDetailComponent,
     SuccessComponent,
     CancleComponent,
     AboutUsComponent,
     CookiesComponent,
  
  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FormsModule, NgxChartsModule, 
    NgxSpinnerModule,
    NgbCarouselModule
   ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthGuard, ApiService

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
