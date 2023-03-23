import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-booking',
  templateUrl: './snackbar-booking.component.html',
  styleUrls: ['./snackbar-booking.component.css']
})
export class SnackbarBookingComponent {
  snackBarRef = inject(MatSnackBarRef);
}
