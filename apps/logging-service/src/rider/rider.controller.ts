import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRiderDTO } from '../dto/create-rider.dto';

@Controller('rider')
export class RiderController {
  @Get()
  getRiders() {
    return 'List of riders';
  }
  @Post()
  createRider(@Body() createRiderDTO: CreateRiderDTO) {
    return createRiderDTO;
  }
}
