import express from "express"

import * as hbs from "express-handlebars"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// Controllers
import AuthController from "./controller/AuthController"
import HomeController from "./controller/HomeController"
import ApiController from "./controller/ApiController"

// Configs
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors())


// Routes
app.get("/login", AuthController.login)
app.post("/login", AuthController.loginService)
//
app.get("/", HomeController.Index)
app.get("/skills", HomeController.Skills)
app.get("/skill/:id", HomeController.Skill)
app.get("/create", HomeController.Create)
app.post("/create", HomeController.CreateService)
app.post("/update", HomeController.Update)
app.post("/delete", HomeController.Delete)
//
app.get("/v1/list/skills", ApiController.Skills)


// Bootstrap
app.listen(3030, () => {
  console.log("Server running on port 3030")
})