import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/use-cases/CreateUserUseCase';
import { InMemoryUserRepository } from '../../infrastructure/repositories/InMemoryUserRepository';

const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { id, name, email } = req.body;
      const result = await createUserUseCase.execute({ id, name, email });
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
