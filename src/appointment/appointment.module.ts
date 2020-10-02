import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentController } from './appointment.controller';
import { appointmentSchema } from './appointment.schema';
import { AppointmentService } from './appointment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Appointment', schema: appointmentSchema },
    ]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
