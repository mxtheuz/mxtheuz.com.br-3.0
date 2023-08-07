import { Request, Response } from "express";
import AuthService from "../service/AuthService";

class AuthController {
  login(request: Request, response: Response) {
    try {
      if (request.query.e == "1") return response.render("auth/login", {title:"Login",err: true})
      return response.render("auth/login", {title:"Login", err: false})
    } catch(e) {
      return response.redirect("/login")
    }
  }

  async loginService(request: Request, response: Response) {
    try {
      const {
        email,
        password
      } = request.body
      const auth = await AuthService.auth(email, password)
      if (auth.status == "approved") {
        response.cookie("__access_mxuser", auth.access_token)
        return response.redirect("/")
      }

      return response.redirect("/login?e=1")
    } catch(e) {
      return response.redirect("/login?e=1")
    }
  }
}

export default new AuthController()