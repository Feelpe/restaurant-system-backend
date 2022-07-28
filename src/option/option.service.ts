import { Injectable, ConflictException } from '@nestjs/common';
import { Option } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateOptionDto } from './dto/create-option.dto';

@Injectable()
export class OptionService {
  constructor(private prismaService: PrismaService) {}

  async create(createOptionDto: CreateOptionDto) {
    const optionExists = await this.prismaService.option.findFirst({
      where: { name: createOptionDto.name },
    });

    if (optionExists) {
      throw new ConflictException('Opção já cadastrada');
    }

    const createdOption = await this.prismaService.option.create({
      data: createOptionDto,
    });

    return createdOption;
  }

  async findMany(): Promise<Option[]> {
    const option = await this.prismaService.option.findMany();
    return option;
  }
}
