import { IsString, IsNotEmpty, IsUrl, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  price: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  imageUrl: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  options: number[];
}
