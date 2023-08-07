import { Request, Response } from "express";

// Utils
import UserRepository from "../repository/UserRepository";
import TokenService from "../service/TokenService";

// Database
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

class HomeController {

  async Index(request: Request, response: Response) {
    try {
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        const user = await UserRepository.findById(parseInt(decoded.content))
        return response.render("index", {user, title: "Dashboard | Mxtheuz Admin"})
      }
  
      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    }
  }

  async Skills(request: Request, response: Response) {
    try { 
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        return response.render("skills", {
          skills: await prisma.skill.findMany(),
          title: "All skills | Mxtheuz Admin"
        })
      }

      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    }
  }

  async Create(request: Request, response: Response) {
    try{
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        return response.render("create", {title: "Create"})
      }

      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    }
  }


  async CreateService(request: Request, response: Response) {
    try{
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        await prisma.skill.create({
          data: {
            name: request.body.skill_name,
            level: request.body.skill_level,
            description: request.body.skill_description
          }
        })
        return response.redirect("/skills")
      }

      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    }
  }

  async Skill(request: Request, response: Response) {
    try{
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        const skill = await prisma.skill.findFirst({where: { id: parseInt(request.params.id)}})
        return response.render("skill", {
          skill,
          title: `Skill: ${request.params.id} | Mxtheuz Admin`
        })
      }

      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    }
  }

  async Update(request: Request, response: Response) {
    try {
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        const {
          skill_id,
          skill_name,
          skill_level,
          skill_description
        } = request.body
        await prisma.skill.update({
          where: {
            id: parseInt(skill_id)
          },
          data: {
            name: skill_name,
            level: skill_level,
            description: skill_description
          },
        })

        return response.redirect("/skills")
      }
      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    } 
  }

  async Delete(request: Request, response: Response) {

    try {
      const {__access_mxuser} = request.cookies
      const decoded = TokenService.decodeJwt(__access_mxuser)
      if(decoded.status == 200) {
        await prisma.skill.delete({
          where: {
            id: parseInt(request.body.id)
          }
        })

        return response.redirect("/skills")
      }

      return response.redirect("/login")
    } catch(e) {
      return response.redirect("/login")
    }
  }
}

export default new HomeController()
