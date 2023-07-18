import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Test' })
  username: string

  @ApiProperty({ example: 'test123' })
  password: string
}

export class LoginUserResponse {
  @ApiProperty({ example: {
      user: {
        userId: 3,
        username: 'test1',
        email: 'test1@gmail.com'
      }
    } })
  user: {
    userId: number
    username: string
    password: string
  }

  @ApiProperty({ example: 'Logged in' })
  message: string
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  message: string
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number

  @ApiProperty({ example: 'Test' })
  username: string

  @ApiProperty({ example: 'test1@gmail.com' })
  email: string
}

export class SignUpResponse {
  @ApiProperty({ example: 1 })
  id: number

  @ApiProperty({ example: 'Test' })
  username: string

  @ApiProperty({ example: 'test1@gmail.com' })
  email: string

  @ApiProperty({ example: '$2b$08$bUiOEROnWaIOPjlKutUe8et7b3ncM/LhzF96wrzcEAcqtGF8czaP.' })
  password: string

  @ApiProperty({ example: '2023-07-15T19:15:39.146Z' })
  updatedAt: string

  @ApiProperty({ example: '2023-07-15T19:15:39.146Z' })
  createdAt: string
}