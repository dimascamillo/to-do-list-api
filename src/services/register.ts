import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

interface RegisterService {
  name: string,
  email: string,
  password: string
}

export async function registerService({ name, email, password }: RegisterService) {
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    }
  })

  if (userWithSameEmail) throw new Error('E-mail já cadastrado na plataforma.')

  await prisma.user.create({
    data: {
      name,
      email,
      password: password_hash
    }
  })
}