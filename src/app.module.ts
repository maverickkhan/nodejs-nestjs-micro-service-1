import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'APP_SERVICE', transport: Transport.TCP },
    ]),
  ],
  // imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
