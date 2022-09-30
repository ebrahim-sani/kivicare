import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from './pages/patient-registration/patient-registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OPDManagementComponent } from './pages/opdmanagement/opdmanagement.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'OPDManagemet/OPDMgmtBilling', component: OPDManagementComponent },
  {
    path: 'Patient/PatientRegistration',
    component: PatientRegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
