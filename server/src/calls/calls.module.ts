import { Module } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CallsGateway } from './calls.gateway';

@Module({
  providers: [CallsGateway, CallsService],
})
export class CallsModule {}
