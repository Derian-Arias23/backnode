import express from "express";
import morgan from "morgan";

//Routes
import routesR from "./routers/RankingRoutes.js";
import routesP from "./routers/premioRoutes.js";
import routesCA from "./routers/centroARoutes.js";
import routesS from "./routers/soliRoutes.js";
import routerN_r from "./routers/Ing_rankingRoutes.js";

const app = express();

// Settings
app.set("port", 4000);

//session
const session = require("express-session");
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));

// middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/rankings", routesR);
app.use("/api/premios", routesP);
app.use("/api/solicitud", routesS);
app.use("/api/newranking", routerN_r);
app.use("/api/centroA", routesCA);

export default app;