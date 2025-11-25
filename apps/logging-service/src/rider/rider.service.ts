import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rider, RiderDocument } from './schemas/rider.schema';
import { Model } from 'mongoose';
import { CreateRiderDTO } from '../dto/create-rider.dto';

@Injectable()
export class RiderService {
  constructor(
    @InjectModel(Rider.name)
    private readonly rider: Model<RiderDocument>,
  ) {}

  async getRiders() {
    return await this.rider.find();
    //communicate with rider microservice  usign riderId
    //communicate can be happend using grpc or rabbitmq or kafka etc
  }

  async createRider(createRiderDTO: CreateRiderDTO) {
    return await this.rider.create(createRiderDTO);
  }
}
