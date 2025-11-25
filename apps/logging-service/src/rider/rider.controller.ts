import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRiderDTO } from '../dto/create-rider.dto';
import { RiderService } from './rider.service';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}
  @Get()
  async getRiders() {
    return await this.riderService.getRiders();
  }
  @Post()
  async createRider(@Body() createRiderDTO: CreateRiderDTO) {
    return await this.riderService.createRider(createRiderDTO);
  }
}
