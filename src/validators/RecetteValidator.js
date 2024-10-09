import { body, validationResult } from 'express-validator';
import { getCategorieById } from '../models/CategorieModel.js';

export const validateRecette = [
  body('titre')
    .trim()
    .notEmpty()
    .withMessage('Le titre est requis.')
    .isLength({ min: 5, max: 100 })
    .withMessage('Le titre doit contenir entre 5 et 100 caractères.'),

  body('ingredients')
    .trim()
    .notEmpty()
    .withMessage('Les ingrédients sont requis.')
    .isLength({ min: 10, max: 500 })
    .withMessage(
      'Les ingrédients doivent contenir entre 10 et 500 caractères.'
    ),

  body('type')
    .trim()
    .notEmpty()
    .withMessage('Le type de recette est requis.')
    .isIn(['entrée', 'plat', 'dessert'])
    .withMessage('Le type de recette doit être entrée, plat ou dessert.'),

  body('categorie_id')
    .notEmpty()
    .withMessage('La catégorie est requise.')
    .custom(async categorie_id => {
      const categorie = await getCategorieById(categorie_id);
      if (!categorie) {
        throw new Error("La catégorie spécifiée n'existe pas.");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
