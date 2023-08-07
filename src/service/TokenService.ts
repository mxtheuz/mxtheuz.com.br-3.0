import jsonwebtoken from "jsonwebtoken"
const JWT_SECRET = ""

class TokenSevice {

  generateJwt(id: string) {
    return jsonwebtoken.sign({
      id,
    }, JWT_SECRET)
  }

  decodeJwt(jwt: string) {
    try {
      jsonwebtoken.verify(jwt, JWT_SECRET)
      const decoded: any = jsonwebtoken.decode(jwt)
      return {
        status: 200,
        content: decoded.id
      }
    } catch(e) {
      return {
        status: 500,
        content: {}
      }
    }
  }

}

export default new TokenSevice()