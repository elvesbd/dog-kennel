import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const search = (req: Request, res: Response) => {
  let query = req.query.q as string;
  let pets = Pet.getName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    pets,
    query
  })
}