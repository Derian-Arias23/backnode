import { Router } from "express";
import { methods as controller } from "../controllers/centroAController.js";

const routesCA = Router();

routesCA.get("/", controller.getCentroA);
routesCA.post("/", controller.postCentroA);
routesCA.put("/:id", controller.updateCentroA);

export default routesCA;