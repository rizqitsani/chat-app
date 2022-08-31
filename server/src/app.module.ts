import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { CallsModule } from './calls/calls.module';

@Module({
  imports: [MessagesModule, CallsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
