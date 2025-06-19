import express from 'express';
import tasksRoutes from "./src/routes/tasks.js";
import cors from "cors";

const app = express();

/*
app.use(
    cors({
        origin: "",
        credentials: true
    })
);
*/

app.use(express.json());


app.use("/api/tasks", tasksRoutes);


export default app;