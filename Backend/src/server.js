import dotenv from "dotenv";

import express from "express";
import cors from 'cors';

import { routes } from "./routes";

import "./database";

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);
app.use(cors());

app.listen(process.env.PORT || 3333, () => console.log("Server is running"));
