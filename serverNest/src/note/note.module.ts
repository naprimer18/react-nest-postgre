import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteResolver } from './note.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [],
  providers: [NoteService, NoteResolver],
  exports: [NoteService],
})
export class NoteModule {}
