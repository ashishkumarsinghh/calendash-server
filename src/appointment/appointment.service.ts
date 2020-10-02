import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentService {
  getAppointments(): string {
    return 'Appointments are here.';
  }
}
