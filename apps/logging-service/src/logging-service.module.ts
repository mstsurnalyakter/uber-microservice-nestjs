import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderModule } from './rider/rider.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-logging-service'),
    RiderModule,
  ],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
