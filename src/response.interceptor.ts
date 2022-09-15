import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ResponseDto } from './common/ResponseDto';
import { map, Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseDto<any>> {
    const token = context.switchToHttp().getRequest<Request>().headers;
    console.log(token);
    context.switchToHttp().getResponse<Response>().status(200);
    return next.handle().pipe(
      map((data) => {
        console.log(data);
        data = new ResponseDto(data);
        console.log(data);
        return data;
      }),
    );
  }
}
