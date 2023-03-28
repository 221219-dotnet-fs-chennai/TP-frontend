import { Guid } from "guid-typescript";
export interface AppointmentDoctor
{
  appointmentId? : Guid,
  patientId? : string | null,
  doctorId? : string | null,
  nurseId? : string | null,
  status? : number
  date? : string
}
