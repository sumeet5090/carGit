import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { ValidateComponent } from './validate/validate.component';
import {ServicesComponent} from './services/services.component';
import {PricingComponent} from './pricing/pricing.component';
import {ClaimComponent} from './claim/claim.component';
import {ContactComponent} from './contact/contact.component';
import {RenewComponent} from './renew/renew.component';
import {ForgotPwdComponent} from './forgot-pwd/forgot-pwd.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'validate', component: ValidateComponent },
  {path: 'services', component: ServicesComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'claim', component: ClaimComponent},
  {path: 'renew', component: RenewComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'forgotPwd', component: ForgotPwdComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports :[RouterModule]

})
export class AppRoutingModule { }
