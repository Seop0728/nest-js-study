import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthDto } from './dto/auth.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authDto: AuthDto): Promise<void> {
    const { username, password } = authDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}
