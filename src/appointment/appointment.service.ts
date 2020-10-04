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
  getAppointment(id: string): Promise<any> {
    return this.apptModel.find({ userId: id }).exec();
  }

  deleteAppointment(id: string): Promise<any> {
    return this.apptModel.deleteOne({ _id: id }).exec();
  }
  async createAppointment(appt: appointmentDto): Promise<any> {
    const newAppt = new this.apptModel(appt);
    return newAppt.save();
  }
}
