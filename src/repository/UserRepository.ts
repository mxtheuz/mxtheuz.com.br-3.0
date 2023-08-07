
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

class UserRepository {
  async findById(id: number) {
    return await prisma.user.findFirst({where:{id}})
  }

  async findByEmail(email: string) {
    return await prisma.user.findFirst({where:{email}})
  }

  create(email: string, name: string, password: string) {
    bcrypt.hash(password, 10, async function(err, hash) {
        await prisma.user.create({
          data: {
            email,
            name,
            password: hash
          }
        })
    })
  }

}

export default new UserRepository()