import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  findOne(filter: {
    where: { id?: string | number, username?: string, email?: string}
  }): Promise<User> {
    return this.userModel.findOne({ ...filter })
  }

  async create(createUserDto: CreateUserDto): Promise<User | { errorMessage: string }> {
    const user = new User()
    const existingByUserName = await this.findOne({ where: { username: createUserDto.username }})

    const existingByEmail = await this.findOne({ where: { email: createUserDto.email }})

    if (existingByUserName) {
      return { errorMessage: `User with username: ${createUserDto.username} already exist` }
    }
    if (existingByEmail) {
      return { errorMessage: `User with email: ${createUserDto.email} already exist` }
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 8)

    user.username = createUserDto.username
    user.email = createUserDto.email
    user.password = hashedPassword

    return user.save()
  }
}
