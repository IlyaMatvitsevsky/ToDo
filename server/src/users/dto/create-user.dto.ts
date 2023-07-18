import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Test' })
  @IsNotEmpty()
  readonly username: string

  @ApiProperty({ example: 'test123' })
  @IsNotEmpty()
  readonly email: string

  @ApiProperty({ example: 'Test@gmail.com' })
  @IsNotEmpty()
  readonly password: string
}