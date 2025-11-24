// lat, lng, riderId, timestamp
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiderDocument = HydratedDocument<Rider>;

@Schema()
class Rider {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true, unique: true })
  riderId: string;
}

export const RiderSchema = SchemaFactory.createForClass(Rider);
