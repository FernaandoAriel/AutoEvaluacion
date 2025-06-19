import express from 'express';
import tasksRoutes from "./src/routes/tasks.js";
import cors from "cors";

const app = express();

import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

/*
app.use(
    cors({
        origin: "",
        credentials: true
    })
);
*/

app.use(express.json());

//Traemos el archivo json
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./DocumentacionAuto.json"), "utf-8")
);

//Mostramos el archivo al ingresar a /api/docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/tasks", tasksRoutes);


export default app;