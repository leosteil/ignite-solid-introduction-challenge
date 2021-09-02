import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlteradyExits = this.usersRepository.findByEmail(email);

    if (userAlteradyExits) {
      throw new Error("Mensagem de erro");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
