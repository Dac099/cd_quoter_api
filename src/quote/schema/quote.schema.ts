import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Client } from './client.schema';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema()
export class Quote {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Client' })
  client: Client;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  length: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: false, type: SchemaTypes.Date })
  releaseDate?: string;

  @Prop({ required: false, type: SchemaTypes.Date, default: Date.now() })
  created_at?: string;

  @Prop({ required: false, type: SchemaTypes.Date, default: null })
  updated_at?: string;

  @Prop({ required: false, type: SchemaTypes.String, default: 'A' })
  revision?: string;

  @Prop({ required: false, type: SchemaTypes.Number, default: 0 })
  consecutive: number;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
