import { PartialType } from '@nestjs/swagger';
import {  MainDTO } from './create-get-quote.dto';

export class UpdateGetQuoteDto extends PartialType(MainDTO) {}
