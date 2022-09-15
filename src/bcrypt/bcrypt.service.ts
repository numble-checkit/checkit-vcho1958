import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class BcryptService {
  private readonly salt: string;

  constructor() {
    this.salt = bcrypt.genSaltSync();
  }
  public encode(target: string): string {
    return bcrypt.hashSync(target, this.salt);
  }

  public compare(src: string, hashed: string): boolean {
    return bcrypt.compareSync(src, hashed);
  }
}
