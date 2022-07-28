import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMenuDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  price: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  imageUrl: string;

  @IsNotEmpty()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  options: number[];
}
