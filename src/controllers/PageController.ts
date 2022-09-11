import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
  let pets = Pet.getAll();

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    pets
  });
}

export const dogs = (req: Request, res: Response) => {
  let pets = Pet.getType('dog')

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    pets
  });
}

export const cats = (req: Request, res: Response) => {
  let pets = Pet.getType('cat')

  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    pets
  });
}

export const fishes = (req: Request, res: Response) => {
  let pets = Pet.getType('fish')

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    pets
  });
}