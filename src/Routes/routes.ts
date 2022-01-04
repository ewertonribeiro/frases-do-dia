import { Router } from "express";
import { Controller } from "../Controllers";

export const routes = Router();

routes.get("/" , (req,res) => res.render("index"));

routes.get("/getfrases" , (req,res) => Controller.handle(req,res));