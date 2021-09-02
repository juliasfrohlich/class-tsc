import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUsersDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) { }
  
  async execute({
    name,
    email,
    password,
    driver_license
  }: ICreateUsersDTO) : Promise<void> {
    
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("Email already exists")
    }
    const passwordHash = await hash(password, 8)
    
    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license
    })

  }
}

export { CreateUserUseCase }