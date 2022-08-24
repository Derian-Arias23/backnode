import { Router } from "express";
import { methods as controller } from "../controllers/Rankingcontroller.js";

const routesR = Router();

routesR.get("/", controller.getRankings);
routesR.get("/:id", controller.getRanking);
//routesR.post("/", controller.postRanking);
//routesR.put("/:id", controller.updateRanking);
routesR.delete("/:id", controller.deleteRanking);

export default routesR;