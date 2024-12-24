import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false, unique: true })
  email?: string;

  @Prop({ required: false, unique: true })
  phone?: string;

  @Prop({ required: false })
  company: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
