import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { NoteModule } from 'src/note/note.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), NoteModule],
  controllers: [],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
