import { Guid } from "guid-typescript";
export interface AppointmentDoctor
{
  appointmentId? : Guid,
  patientId? : string,
  doctorId? : string,
  nurseId? : string,
  status? : number
  date? : string


}
