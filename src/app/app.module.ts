import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WhychooseComponent } from './components/whychoose/whychoose.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { PatientRegistrationComponent } from './pages/patient-registration/patient-registration.component';
import { MainPatientRegistrationComponent } from './components/main-patient-registration/main-patient-registration.component';
import { OPDManagementComponent } from './pages/opdmanagement/opdmanagement.component';
import { MainOPDManagementComponent } from './components/main-opdmanagement/main-opdmanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    WhychooseComponent,
    ServicesComponent,
    DoctorsComponent,
    TestimonialsComponent,
    BlogComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TopBarComponent,
    SidebarComponent,
    MainComponent,
    PatientRegistrationComponent,
    MainPatientRegistrationComponent,
    OPDManagementComponent,
    MainOPDManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
