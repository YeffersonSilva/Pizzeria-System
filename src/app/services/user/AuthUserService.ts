import prismaClient from "../../prisma";
import { compare } from "bcryptjs";


interface AuthUserRequest {
    email: string;
    password: string;
    }


class AuthUserService {
    async execute({email, password}: AuthUserRequest) {
        // Verificar se email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new Error('Email/Password incorrect');
        }
        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }
        // Gerar token



        return{ok :true}
  }
}

export { AuthUserService }