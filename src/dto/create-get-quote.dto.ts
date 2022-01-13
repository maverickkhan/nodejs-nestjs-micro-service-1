import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class MainDTO {

    @ApiProperty()
    @IsNotEmpty()
    data: string

}
