import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MainDTO } from './dto/create-get-quote.dto';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(
    @Body() mainDTO: MainDTO
  ) {
    return this.appService.getMessage(mainDTO.data)
  }


}
