import {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
  searchRecettesByName,
} from '../models/RecetteModel.js';

export const getAllRecettesController = async (req, res) => {
  try {
    const recettes = await getAllRecettes();
    return res.status(200).json(recettes);
  } catch (error) {
    console.error('Erreur lors de la récupération des recettes :', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de la récupération des recettes.',
    });
  }
};

export const getRecetteByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const recette = await getRecetteById(id);
    if (!recette) {
      return res.status(404).json({ message: 'Recette non trouvée.' });
    }
    return res.status(200).json(recette);
  } catch (error) {
    console.error('Erreur lors de la récupération de la recette :', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de la récupération de la recette.',
    });
  }
};

export const createRecetteController = async (req, res) => {
  const { titre, ingredients, type, categorie_id } = req.body;

  try {
    const newRecette = await createRecette(
      titre,
      ingredients,
      type,
      categorie_id
    );
    return res
      .status(201)
      .json({ message: 'Recette créée avec succès', recette: newRecette });
  } catch (error) {
    console.error('Erreur lors de la création de la recette :', error);
    return res
      .status(500)
      .json({ message: 'Erreur serveur lors de la création de la recette.' });
  }
};

export const updateRecetteController = async (req, res) => {
  const { id } = req.params;
  const { titre, ingredients, type, categorie_id } = req.body;

  try {
    const updatedRecette = await updateRecette(
      id,
      titre,
      ingredients,
      type,
      categorie_id
    );
    if (updatedRecette.affectedRows === 0) {
      return res.status(404).json({ message: 'Recette non trouvée.' });
    }
    return res.status(200).json({ message: 'Recette mise à jour avec succès' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la recette :', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de la mise à jour de la recette.',
    });
  }
};

export const deleteRecetteController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteRecette(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recette non trouvée.' });
    }
    return res.status(200).json({ message: 'Recette supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la recette :', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de la suppression de la recette.',
    });
  }
};

export const searchRecettesController = async (req, res) => {
  const { nom } = req.query;

  if (!nom) {
    return res
      .status(400)
      .json({ message: 'Le paramètre "nom" est requis pour la recherche.' });
  }

  try {
    const recettes = await searchRecettesByName(nom);
    if (recettes.length === 0) {
      return res.status(404).json({ message: 'Aucune recette trouvée.' });
    }
    return res.status(200).json(recettes);
  } catch (error) {
    console.error('Erreur lors de la recherche des recettes :', error);
    return res
      .status(500)
      .json({ message: 'Erreur serveur lors de la recherche des recettes.' });
  }
};
