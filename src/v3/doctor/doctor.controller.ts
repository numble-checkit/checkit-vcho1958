import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/common/decorator/Public';
import { DoctorService } from './doctor.service';

export interface DoctorDto {
  id: string;
  doctor_display_name: string;
  doctor_image_url: string;
  hospital_name: string;
  hospital_address: string;
  description: string;
  hospital_img: string;
}

export interface DoctorListDto {
  doctors: Array<DoctorDto>;
}

export interface doctorRegDto {
  doctor_id: string;
  address: string;
  address_code: string;
  store_address: string;
}

export interface DoctorDetailListDto {
  doctor: Array<DoctorDetailDto>;
}

export interface DoctorDetailDto {
  id: string;
  available_hours: string;
  available_weekday: string;
  description: string;
  doctor_display_name: string;
  doctor_image_url: string;
  doctor_images: Array<string>;
  doctor_tel: string;
  doctor_tel_kakao: string;
  hospital_addr: string;
  hospital_name: string;
  lab_addr: string;
  lab_name: string;
  lab_postal_code: string;
  lab_receiver_name: string;
  lab_tel: string;
  lat: string;
  lng: string;
  professional_statement: string;
  subjects: string;
  hospital_img: string;
}

export interface DoctorListDto {
  doctors: Array<DoctorDto>;
}

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Public()
  @Get('list')
  public async list(): Promise<DoctorListDto> {
    return this.doctorService.list();
  }

  @Get()
  public async get(): Promise<DoctorDetailListDto> {
    return this.doctorService.get();
  }
}
