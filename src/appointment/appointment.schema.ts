import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Appointment extends Document {
  @Prop({ type: String, required: true })
  userId: string;
  @Prop({ type: String, required: true })
  date: Date;
  @Prop({ type: String, required: true })
  time: string;
  @Prop({ type: String, required: true })
  description: string;
}
export const appointmentSchema = SchemaFactory.createForClass(Appointment);
