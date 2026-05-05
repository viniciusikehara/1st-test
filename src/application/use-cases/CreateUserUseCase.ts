import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { User } from '../../domain/entities/User';
import { UserEmail } from '../../domain/value-objects/UserEmail';
import { UserRepository } from '../../domain/repositories/UserRepository';

export class CreateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(dto: CreateUserDTO): Promise<{ id: string; name: string; email: string }> {
    // Business rule validations could be done here but ideally in domain
    const emailVO = new UserEmail(dto.email);
    const user = new User(dto.id, dto.name);

    await this.userRepository.save(user);

    return {
      id: user.id,
      name: user.name,
      email: emailVO.value,
    };
  }
}