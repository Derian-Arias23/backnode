import { Router } from "express";
import { methods as controller } from "../controllers/solicitudController.js";

const routesS = Router();

routesS.get("/", controller.getSolis);
routesS.get("/", controller.getSoli);
routesS.post("/", controller.postSoli);
routesS.put("/:id", controller.updateSoli);

export default routesS;