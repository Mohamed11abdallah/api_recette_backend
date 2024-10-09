import db from '../config/dbConfig.js';

export const getAllRecettes = async () => {
  const [results] = await db.query('SELECT * FROM recettes');
  return results;
};

export const getRecetteById = async id => {
  const [results] = await db.query('SELECT * FROM recettes WHERE id = ?', [id]);
  return results.length > 0 ? results[0] : null;
};

export const createRecette = async (titre, ingredients, type, categorie_id) => {
  const [result] = await db.query(
    'INSERT INTO recettes (titre, ingredients, type, categorie_id) VALUES (?, ?, ?, ?)',
    [titre, ingredients, type, categorie_id]
  );
  return result;
};

export const updateRecette = async (
  id,
  titre,
  ingredients,
  type,
  categorie_id
) => {
  const [result] = await db.query(
    'UPDATE recettes SET titre = ?, ingredients = ?, type = ?, categorie_id = ? WHERE id = ?',
    [titre, ingredients, type, categorie_id, id]
  );
  return result;
};

export const deleteRecette = async id => {
  const [result] = await db.query('DELETE FROM recettes WHERE id = ?', [id]);
  return result;
};

export const searchRecettesByName = async nom => {
  const query = 'SELECT * FROM recettes WHERE titre LIKE ?';
  const [results] = await db.query(query, [`%${nom}%`]);
  return results;
};
