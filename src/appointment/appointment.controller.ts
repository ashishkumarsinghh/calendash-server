import { Controller, Get } from '@nestjs/common';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Get('')
  getAppointments(): string {
    return this.service.getAppointments();
  }
}
