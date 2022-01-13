import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      }
    })
  }
  getHello(): string {
    return 'Hello World!';
  }

  async getMessage(data: string){
    return await this.client.send<string, string>('message', data);
  }
}
