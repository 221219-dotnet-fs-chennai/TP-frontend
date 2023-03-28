import { Guid } from "guid-typescript";
export interface AppointmentDoctor
{
  appointmentId? : Guid,
  patientId? : string | null | undefined,
  doctorId? : string | null,
  nurseId? : string | null,
  status? : number
  date? : string
}
