import {
  IsString,
  IsEmail,
  IsDateString,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

export class ResponseCreateMesaDto {
  @IsString()
  @IsNotEmpty()
  mesaId: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

  @IsDateString()
  @IsNotEmpty()
  mesaStart: Date;

  @IsDateString()
  @IsNotEmpty()
  mesaEnd: Date;

  @IsString()
  @IsNotEmpty()
  menuTitle: string;

  @IsString()
  @IsNotEmpty()
  menuPrice: string;

  @IsString()
  @IsNotEmpty()
  menuDescription: string;

  @IsUrl()
  @IsNotEmpty()
  menuImage: string;
}
