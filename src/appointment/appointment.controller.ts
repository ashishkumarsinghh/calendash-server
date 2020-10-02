import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { appointmentDto } from './appointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly service: AppointmentService) {}

  @Get('/')
  getAllAppointments(): Promise<any> {
    return this.service.getAppointments();
  }
  @Get('/:uid')
  getAppointments(@Param('uid') uid: string): string {
    return this.service.getAppointment(uid);
  }
  @Post()
  createAppointment(@Body() apptDto: appointmentDto): Promise<any> {
    return this.service.createAppointment(apptDto);
  }
}
