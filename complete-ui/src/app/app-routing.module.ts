import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { LoginGuard } from './gaurds/login.guard';
import { AppointmentsComponent } from './components/nurse/nurse-nav/appointments/appointments.component';
import { PatientHistoryComponent } from './components/nurse/nurse-nav/patient-history/patient-history.component';
import { UpdateinfoComponent } from './components/nurse/nurse-nav/updateinfo/updateinfo.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ViewPatientsComponent } from './components/admin/view-patients/view-patients.component';
import { AddDoctorComponent } from './components/admin/add-doctor/add-doctor.component';
import { AddNurseComponent } from './components/admin/add-nurse/add-nurse.component';
import { NotificationComponent } from './components/doctor/notification/notification.component';
import { AppointmentRequestsComponent } from './components/doctor/appointment-requests/appointment-requests.component';
import { AddHealthComponent } from './components/doctor/add-helath/add-health.component';
import { PatientCompleteHistoryDocComponent } from './components/doctor/patient-complete-history/patient-complete-history.component';
import { PatientProfileComponent } from './components/patient/patient-profile/patient-profile.component';
import { ShowDoctorsComponent } from './components/patient/show-doctors/show-doctors.component';
import { DoctorHistoryViewComponent } from './components/doctor/doctor-history-view/doctor-history-view.component';
import { PickAppointmentsComponent } from './components/nurse/nurse-nav/pick-appointments/pick-appointments.component';
import { CompleteHistoryComponent } from './components/patient/complete-history/complete-history.component';
import { HistoryPatientViewComponent } from './components/patient/history-patient-view/history-patient-view.component';


const routes: Routes = [
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: '', component: NavBarComponent
  },
  // {
  //   path: 'add-doctor', component:AddDoctorComponent
  // }
  {
    path: 'admin-dashboard', component:DashboardComponent
  },
  {
    path: 'nurse-dashboard/:name/:nurId', component: AppointmentsComponent
  },
  // {
  //   path: 'view-patient-history', component: PatientHistoryComponent
  // },
  {
    path: 'update-patient-info/:id/:AID', component: UpdateinfoComponent
  },
  {
    path: 'patient-dashboard', component: PatientDashboardComponent
  },
  {
    path: 'view-patient-basic-info', component: ViewPatientsComponent,
  },
  {
    path: 'add-doctor-details', component: AddDoctorComponent,
  },
  {
    path: 'add-nurse-details', component: AddNurseComponent
  },
  {
    path: 'doctor-dashboard/:name/:docId', component: NotificationComponent,
  },
  {
    path: 'appointment-requests', component:AppointmentRequestsComponent,
  },
  {
    path: 'add-patient-health', component: AddHealthComponent,
  },
  {
    path: 'add-patient-health/:name/:PID/:AID', component: AddHealthComponent,
  },
  {
    path: 'view-complete-history-doc', component:PatientCompleteHistoryDocComponent
  },
  {
    path: 'view-your-profile', component:PatientProfileComponent,
  },
  {
    path: 'book-appointment', component:ShowDoctorsComponent,
  },
  {
    path: 'show-doctors', component:ShowDoctorsComponent,
  },
  {
    path: 'show-doctors/:day', component:ShowDoctorsComponent,
  },
  {
    path: 'patient-history-doctor-view/:id/:name', component:DoctorHistoryViewComponent,
  },
  {
    path: 'patient-history-nurse-view/:id',component: PatientHistoryComponent
  },
  {
    path: 'nurse/pick-appointments', component : PickAppointmentsComponent
  },
  {
    path: 'view/complete/history/:id', component : CompleteHistoryComponent
  },
  {
    path: 'patient/view/complete/history/:id', component:HistoryPatientViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
