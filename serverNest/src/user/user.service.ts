import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUsersById(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async createUser(name: string): Promise<User> {
    const candidate = this.userRepository.create({ name });
    return await this.userRepository.save(candidate);
  }

  async updateUser(id: string, name: string): Promise<User> {
    await this.userRepository.update(id, { name });
    return await this.userRepository.findOne(id);
  }

  async deleteUser(id: string): Promise<string> {
    await this.userRepository.delete(id);
    return id;
  }
}
