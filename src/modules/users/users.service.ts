import { Inject, Injectable } from '@nestjs/common';

import { USER_REPOSITORY } from '../../core/constants/index';

import { UserDTO } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDTO): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByLogin(login: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { login } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
