import { Guid } from "guid-typescript";

export interface patientinfo{
  patId : Guid ,
  fullname : string,
  age : number,
  gender : string,
  email : string,
  pasword ?: string,
  phone : number,
  adressLine : string,
  city : string,
  state : string,
  created : string

}
