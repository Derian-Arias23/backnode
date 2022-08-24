import { Router } from "express";
import { methods as controller } from "../controllers/premioController.js";

const routesP = Router();

routesP.get("/", controller.getPremios);
routesP.post("/", controller.postPremio);
routesP.put("/:id", controller.updatePremio);

export default routesP;