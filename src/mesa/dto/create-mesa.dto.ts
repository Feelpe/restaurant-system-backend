import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMesaDto {
  @IsString()
  @ApiProperty()
  menu: string;

  @IsString()
  @ApiProperty()
  mesaNumber: string;
}
