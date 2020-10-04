import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  getAppointments(@Param('uid') uid: string): Promise<any> {
    return this.service.getAppointment(uid);
  }
  @Delete('/:id')
  deleteAppointment(@Param('id') id: string): Promise<any> {
    return this.service.deleteAppointment(id);
  }
  @Post()
  createAppointment(@Body() apptDto: appointmentDto): Promise<any> {
    return this.service.createAppointment(apptDto);
  }
}
