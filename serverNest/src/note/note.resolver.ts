import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Note } from 'src/typeorm';
import { NoteService } from './note.service';

@Resolver()
export class NoteResolver {
  constructor(private readonly noteService: NoteService) {}

  @Query()
  getNotes(): Promise<Note[]> {
    return this.noteService.getNotes();
  }

  @Query()
  getNotesById(@Args('id') id: string): Promise<Note> {
    return this.noteService.getNotesById(id);
  }

  @Mutation()
  createNote(
    @Args('message') message: string,
    @Args('userId') userId: string,
  ): Promise<Note> {
    return this.noteService.createNote(message, userId);
  }

  @Mutation()
  updateNote(
    @Args('id') id: string,
    @Args('message') message: string,
    @Args('userId') userId: string,
  ): Promise<Note> {
    return this.noteService.updateNote(id, message, userId);
  }

  @Mutation()
  deleteNote(@Args('id') id: string): Promise<string> {
    return this.noteService.deleteNote(id);
  }
}
