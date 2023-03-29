import { Guid } from "guid-typescript";
export interface AppointmentDoctor
{
  // [x: string]: any;
  appointmentId : Guid,
  patientId? : string | null | undefined,
  doctorId? : string | null,
  nurseId? : string | null,
  status? : number
  date? : string
}

export interface AppointmentDoctorOne
{
  appointmentId ?: Guid,
  patientId? : string | null | undefined,
  doctorId? : string | null,
  nurseId? : string | null,
  status? : number
  date? : string
}