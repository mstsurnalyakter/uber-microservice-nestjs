import { Controller, Get } from '@nestjs/common';

@Controller('rider')
export class RiderController {
  @Get()
  getRiders() {
    return 'List of riders';
  }
}
