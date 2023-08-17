import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Note, User } from 'src/typeorm';
import { UserService } from './user.service';
import { NoteService } from 'src/note/note.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly noteService: NoteService,
  ) {}

  @Query()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query()
  getUsersById(@Args('id') id: string): Promise<User> {
    return this.userService.getUsersById(id);
  }

  @Mutation()
  createUser(@Args('name') name: string): Promise<User> {
    return this.userService.createUser(name);
  }

  @Mutation()
  updateUser(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<User> {
    return this.userService.updateUser(id, name);
  }

  @Mutation()
  deleteUser(@Args('id') id: string): Promise<string> {
    return this.userService.deleteUser(id);
  }

  @ResolveField('notes', () => [Note])
  async notes(@Parent() user: User) {
    const { id } = user;
    console.log('id11 ', id);
    return this.noteService.getNotesByUserId(id);
  }
}
