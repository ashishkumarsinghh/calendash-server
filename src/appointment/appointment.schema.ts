import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Appointment extends Document {
  @Prop({ type: String, required: true })
  userId: string;
  @Prop({ type: String, required: true })
  dateTimeFrom: string;
  @Prop({ type: String, required: true })
  dateTimeTo: string;
  @Prop({ type: String, required: true })
  description: string;
}
export const appointmentSchema = SchemaFactory.createForClass(Appointment);
