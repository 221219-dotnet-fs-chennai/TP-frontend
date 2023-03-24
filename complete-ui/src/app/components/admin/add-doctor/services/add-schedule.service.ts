import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AddScheduleService {
  selectedDate !: Date
  Docemail !: string | undefined
  constructor() { }
}
