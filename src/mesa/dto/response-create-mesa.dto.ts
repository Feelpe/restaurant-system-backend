import { IsString, IsEmail, IsUrl, IsNotEmpty } from 'class-validator';

export class ResponseCreateMesaDto {
  @IsString()
  @IsNotEmpty()
  mesaId: string;

  @IsString()
  @IsNotEmpty()
  mesaNumber: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

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
