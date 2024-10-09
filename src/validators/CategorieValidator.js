import { body, param, validationResult } from 'express-validator';
import {
  getCategorieByNom,
  getAllRecettes,
  getCategorieById,
} from '../models/CategorieModel.js';

export const validateCategorie = [
  body('nom')
    .trim()
    .notEmpty()
    .withMessage('Le nom de la catégorie est requis.')
    .isLength({ max: 100 })
    .withMessage('Le nom de la catégorie ne doit pas dépasser 100 caractères.')
    .custom(async value => {
      const categories = await getCategorieByNom(value);
      if (categories.length > 0) {
        throw new Error('Le nom de la catégorie doit être unique.');
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

export const validateCategorieSuppression = [
  param('id')
    .isInt()
    .withMessage("L'ID de la catégorie doit être un entier.")
    .custom(async id => {
      const categorie = await getCategorieById(id);
      if (!categorie) {
        throw new Error("La catégorie spécifiée n'existe pas.");
      }

      const recettes = await getAllRecettes();
      const hasRecettes = recettes.some(
        recette => recette.categorie_id === parseInt(id, 10)
      );

      if (hasRecettes) {
        throw new Error(
          'Impossible de supprimer une catégorie contenant des recettes.'
        );
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
