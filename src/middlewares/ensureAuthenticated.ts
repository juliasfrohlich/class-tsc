import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
interface IPayload {
  sub: string
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(token, "72b302bf297a228a75730123efef7c41") as IPayload

    const usersRepository = new UsersRepository()

    const user = await usersRepository.findById(user_id)

    if (!user) {
      throw new AppError("User doesn't exists!", 401)
    }
    
    request.user = {
      id: user.id
    }

    next()
  } catch {
    throw new AppError("Invalid token", 401)
  }
}

