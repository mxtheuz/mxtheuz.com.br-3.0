import { Request, Response } from "express"

// Database
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class ApiController {

  async Skills(request: Request, response: Response) {
    try {
      const skills = await prisma.skill.findMany()
       return response.status(200).send({
        statusCode: 200,
        content: skills
      })
    } catch (e) {
      return response.status(500).send({
        statusCode: 500,
        content: []
      })
    }
  }
}

export default new ApiController()