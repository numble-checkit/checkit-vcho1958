import { HttpStatus } from '@nestjs/common';

export class ResponseDto<T> {
  constructor(data: T) {
    this.status = 'ok';
    this.data = data;
  }

  status: string;
  data: T;
}
