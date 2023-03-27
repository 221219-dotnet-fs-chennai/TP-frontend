import { Guid } from "guid-typescript";

export interface Doctor {
  id ?: Guid | string;
  name: string | null;
  email: string | null;
  gender: string | null;
  imgUrl: string | null;
  specialization: string | null;
  experience: number;
  phoneNo: number | null;
}