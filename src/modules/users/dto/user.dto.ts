import { IsNotEmpty, MinLength } from 'class-validator';

export class UserDTO {
  readonly username: string;

  @IsNotEmpty()
  @MinLength(3)
  readonly login: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;

  readonly sex: number;

  readonly height: number;

  readonly weight: number;

  readonly birthDate: Date;

  readonly role: number;
}
