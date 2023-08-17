import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async getNotes(): Promise<Note[]> {
    const x = await this.noteRepository.find();
    console.log('x11', x);
    return x;
  }

  async getNotesById(id: string): Promise<Note> {
    return await this.noteRepository.findOne(id);
  }

  async createNote(message: string, userId: string): Promise<Note> {
    const candidate = this.noteRepository.create({ message, userId });
    return await this.noteRepository.save(candidate);
  }

  async updateNote(id: string, message: string, userId: string): Promise<Note> {
    await this.noteRepository.update(id, { message, userId });
    return await this.noteRepository.findOne(id);
  }

  async deleteNote(id: string): Promise<string> {
    await this.noteRepository.delete(id);
    return id;
  }

  async getNotesByUserId(userId: string): Promise<Note[]> {
    return await this.noteRepository.find({ userId });
  }
}
