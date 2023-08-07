import bcrypt from "bcrypt"
import UserRepository from "../repository/UserRepository"
import TokenService from "./TokenService"

class AuthService {

  async auth(email: string, password: string) {
    const user = await UserRepository.findByEmail(email)
    if(user) {
      if(await bcrypt.compareSync(password, user.password)) {
        return {
          status: "approved",
          access_token: TokenService.generateJwt(user.id.toString())
        }
      }
    }
    return {
      status: "rejected",
      access_token: ""
    }
  }
}

export default new AuthService()