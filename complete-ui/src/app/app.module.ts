import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { NurseNavComponent } from './components/nurse/nurse-nav/nurse-nav.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppointmentsComponent } from './components/nurse/nurse-nav/appointments/appointments.component';
import { PatientHistoryComponent } from './components/nurse/nurse-nav/patient-history/patient-history.component';
import { UpdateinfoComponent } from './components/nurse/nurse-nav/updateinfo/updateinfo.component';
import { PatientCompleteHistoryComponent } from './components/patient/patient-complete-history/patient-complete-history.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ViewPatientsComponent } from './components/admin/view-patients/view-patients.component';
import { AddDoctorComponent } from './components/admin/add-doctor/add-doctor.component';
import { AddNurseComponent } from './components/admin/add-nurse/add-nurse.component';
import { NotificationComponent } from './components/doctor/notification/notification.component';
import { AppointmentRequestsComponent } from './components/doctor/appointment-requests/appointment-requests.component';
import { AddHealthComponent } from './components/doctor/add-helath/add-health.component';
import { BasicDetailsComponent } from './components/doctor/basic-details/basic-details.component';
import { PatientCompleteHistoryDocComponent } from './components/doctor/patient-complete-history/patient-complete-history.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { AddScheduleComponent } from './components/admin/add-schedule/add-schedule.component';
import { SnackbarComponent } from './components/admin/add-schedule/snackbar/snackbar.component';
import { ScheduleComponent } from './components/admin/add-schedule/schedule/schedule.component';

import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { UpdateScheduleComponent } from './components/admin/update-schedule/update-schedule.component';
import { ShowDoctorsComponent } from './components/patient/show-doctors/show-doctors.component';
import { BookingAlertComponent } from './components/patient/booking-alert/booking-alert.component';
import { SnackbarBookingComponent } from './components/patient/show-doctors/snackbar-booking/snackbar-booking.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    AddDoctorComponent,
    NurseNavComponent,
    AppointmentsComponent,
    PatientHistoryComponent,
    UpdateinfoComponent,
    PatientCompleteHistoryComponent,
    PatientDashboardComponent,
    DashboardComponent,
    ViewPatientsComponent,
    AddNurseComponent,
    NotificationComponent,
    AppointmentRequestsComponent,
    AddHealthComponent,
    BasicDetailsComponent,
    PatientCompleteHistoryDocComponent,
    PatientProfileComponent,
    AddScheduleComponent,
    SnackbarComponent,
    ScheduleComponent,
    UpdateScheduleComponent,
    ShowDoctorsComponent,
    BookingAlertComponent,
    SnackbarBookingComponent,
    BookAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-hsr0056cw3v05nmk.us.auth0.com',
      clientId: 'wov5rSwD3cVkOAfuSPAc9T1lD8LS88zM',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatTabsModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [
    DatePipe,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
