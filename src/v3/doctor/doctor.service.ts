import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  DoctorDetailDto,
  DoctorDetailListDto,
  DoctorDto,
  DoctorListDto,
} from './doctor.controller';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}

  private exclude<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }

  public async list(): Promise<DoctorListDto> {
    const doctors = await this.prisma.doctor.findMany({
      select: {
        id: true,
        doctor_display_name: true,
        doctor_image_url: true,
        hospital_name: true,
        hospital_address: true,
        description: true,
        hospital_img: true,
      },
    });
    return { doctors };
  }

  public async get(): Promise<DoctorDetailListDto> {
    const doctor = await this.prisma.doctor.findMany();
    const res = doctor.map((d) => {
      const { hospital_address, ...doc } = d;
      return { ...doc, hospital_addr: hospital_address };
    });
    return { doctor: res };
  }
}
