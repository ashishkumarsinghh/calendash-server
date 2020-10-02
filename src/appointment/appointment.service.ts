import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { appointmentDto } from './appointment.dto';
import { Appointment } from './appointment.schema';
import { Model } from 'mongoose';
@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('Appointment') private readonly apptModel: Model<Appointment>,
  ) {}
  getAppointments(): Promise<Appointment[]> {
    return this.apptModel.find().exec();
  }
  getAppointment(id: string): string {
    return 'Details of appointment of userid = ' + id;
  }

  async createAppointment(appt: appointmentDto): Promise<any> {
    const newAppt = new this.apptModel(appt);
    return newAppt.save();
  }
}
