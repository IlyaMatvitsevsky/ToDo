import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type Priority =
  'Urgent and important' |
  'Urgent and not important' |
  'Not urgent and not important' |
  'Not urgent and important'

export class CreateTaskDto {
  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly userId: number

  @ApiProperty({ example: 'complete homework' })
  @IsNotEmpty()
  readonly name: string

  @ApiProperty({ example: 'complete mathematics exercise number 4-10' })
  @IsNotEmpty()
  readonly description: string

  @ApiProperty({ example: '2023-07-15T19:15:39.146Z' })
  @IsNotEmpty()
  readonly deadline: Date

  @ApiProperty({ example: 'Urgent and important' })
  @IsNotEmpty()
  readonly priority: Priority

  @ApiProperty({ example: false })
  @IsNotEmpty()
  readonly completed: boolean
}

export class UpdateTaskDto {
  @ApiProperty({ example: 'complete homework!' })
  readonly name: string

  @ApiProperty({ example: 'complete chemistry' })
  readonly description: string

  @ApiProperty({ example: '2023-06-15T19:15:39.146Z' })
  readonly deadline: Date

  @ApiProperty({ example: 'Urgent and not important' })
  readonly priority: Priority

  @ApiProperty({ example: true })
  readonly completed: boolean
}