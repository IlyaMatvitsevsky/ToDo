import { Body, Controller, Header, HttpCode, HttpStatus, Post, UseGuards, Request, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LoginCheckResponse, LoginUserRequest, LoginUserResponse, LogoutUserResponse, SignUpResponse } from './types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {
  }

  @ApiOkResponse({ type: SignUpResponse })
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @ApiOkResponse({ type: LoginUserResponse })
  @ApiBody({ type: LoginUserRequest })
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  login(@Request() req) {
    return { user: req.user, message: 'Logged in' }
  }

  @ApiOkResponse({ type: LoginCheckResponse })
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  loginCheck(@Request() req) {
    return req.user
  }

  @ApiOkResponse({ type: LogoutUserResponse })
  @Get('/logout')
  logout(@Request() req) {
    req.session.destroy()
    return { message: 'session has ended' }
  }
}
