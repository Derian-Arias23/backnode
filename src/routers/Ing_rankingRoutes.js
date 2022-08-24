import {Router} from "express";
import { methods as controller } from "../controllers/Ing_rankingController.js";

const routerN_r = Router();

routerN_r.get("/", controller.getNew_Rankings);
routerN_r.post("/", controller.postNew_Ranking);
routerN_r.put("/:id", controller.updateNew_Ranking);

export default routerN_r;