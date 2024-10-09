// import './helpers/jasmineHelper.js';
// import db from '../src/config/dbConfig.js';
// import {
//   getAllRecettes,
//   getRecetteById,
//   createRecette,
//   updateRecette,
//   deleteRecette,
// } from '../src/models/RecetteModel.js';

// describe('RecetteModel', () => {
//   beforeEach(async () => {
//     await db.query('DELETE FROM recettes');
//   });

//   it('devrait récupérer toutes les recettes', async () => {
//     await createRecette(
//       'Salade César',
//       'Laitue, Poulet, Parmesan, Croûtons, Sauce César',
//       'Entrée',
//       1
//     );

//     const recettes = await getAllRecettes();
//     expect(recettes).toBeDefined();
//     expect(Array.isArray(recettes)).toBe(true);
//     expect(recettes.length).toBe(1);
//   });

//   it('devrait récupérer une recette par ID', async () => {
//     const nouvelleRecette = await createRecette(
//       'Pizza Margherita',
//       'Tomates, Mozzarella, Basilic, Pâte à pizza',
//       'Plat principal',
//       2
//     );

//     const recette = await getRecetteById(nouvelleRecette.insertId);
//     expect(recette).toBeDefined();
//     expect(recette.id).toBe(nouvelleRecette.insertId);
//   });

//   it('devrait créer une nouvelle recette', async () => {
//     const result = await createRecette(
//       'Tarte aux pommes',
//       'Pommes, Sucre, Beurre, Pâte feuilletée',
//       'Dessert',
//       3
//     );
//     expect(result).toBeDefined();
//     expect(result.affectedRows).toBe(1);
//   });

//   it('devrait mettre à jour une recette existante', async () => {
//     const nouvelleRecette = await createRecette(
//       'Soupe de légumes',
//       'Carottes, Pommes de terre, Oignons, Eau',
//       'Entrée',
//       1
//     );

//     const result = await updateRecette(
//       nouvelleRecette.insertId,
//       'Soupe de légumes améliorée',
//       'Carottes, Pommes de terre, Oignons, Épices, Eau',
//       'Entrée',
//       1
//     );
//     expect(result.affectedRows).toBe(1);

//     const updatedRecette = await getRecetteById(nouvelleRecette.insertId);
//     expect(updatedRecette.titre).toBe('Soupe de légumes améliorée');
//   });

//   it('devrait supprimer une recette par ID', async () => {
//     const nouvelleRecette = await createRecette(
//       'Crêpes au Nutella',
//       'Farine, Lait, Oeufs, Nutella',
//       'Dessert',
//       3
//     );

//     const result = await deleteRecette(nouvelleRecette.insertId);
//     expect(result.affectedRows).toBe(1);

//     const recetteSupprimee = await getRecetteById(nouvelleRecette.insertId);
//     expect(recetteSupprimee).toBeNull(); // Vérifie que la recette n'existe plus
//   });
// });

// Importation des modules nécessaires
// import './helpers/jasmineHelper.js'; // Assurez-vous que ce chemin est correct
// import db from '../src/config/dbConfig.js'; // Vérifiez que dbConfig.js est également accessible
// import {
//   getAllRecettes,
//   getRecetteById,
//   createRecette,
//   updateRecette,
//   deleteRecette,
// } from '../src/models/RecetteModel.js'; // Chemin à confirmer

// describe('RecetteModel', () => {
//   // Avant chaque test, nous supprimons les données de la table recettes
//   beforeEach(async () => {
//     await db.query('DELETE FROM recettes');
//   });

//   it('devrait récupérer toutes les recettes', async () => {
//     await createRecette(
//       'Salade César',
//       'Laitue, Poulet, Parmesan, Croûtons, Sauce César',
//       'Entrée',
//       1
//     );

//     const recettes = await getAllRecettes();
//     expect(recettes).toBeDefined();
//     expect(Array.isArray(recettes)).toBe(true);
//     expect(recettes.length).toBe(1);
//   });

//   it('devrait récupérer une recette par ID', async () => {
//     const nouvelleRecette = await createRecette(
//       'Pizza Margherita',
//       'Tomates, Mozzarella, Basilic, Pâte à pizza',
//       'Plat principal',
//       2
//     );

//     const recette = await getRecetteById(nouvelleRecette.insertId);
//     expect(recette).toBeDefined();
//     expect(recette.id).toBe(nouvelleRecette.insertId);
//   });

//   it('devrait créer une nouvelle recette', async () => {
//     const result = await createRecette(
//       'Tarte aux pommes',
//       'Pommes, Sucre, Beurre, Pâte feuilletée',
//       'Dessert',
//       3
//     );
//     expect(result).toBeDefined();
//     expect(result.affectedRows).toBe(1);
//   });

//   it('devrait mettre à jour une recette existante', async () => {
//     const nouvelleRecette = await createRecette(
//       'Soupe de légumes',
//       'Carottes, Pommes de terre, Oignons, Eau',
//       'Entrée',
//       1
//     );

//     const result = await updateRecette(
//       nouvelleRecette.insertId,
//       'Soupe de légumes améliorée',
//       'Carottes, Pommes de terre, Oignons, Épices, Eau',
//       'Entrée',
//       1
//     );
//     expect(result.affectedRows).toBe(1);

//     const updatedRecette = await getRecetteById(nouvelleRecette.insertId);
//     expect(updatedRecette.title).toBe('Soupe de légumes améliorée'); // Vérifiez que vous utilisez 'title' au lieu de 'titre'
//   });

//   it('devrait supprimer une recette par ID', async () => {
//     const nouvelleRecette = await createRecette(
//       'Crêpes au Nutella',
//       'Farine, Lait, Oeufs, Nutella',
//       'Dessert',
//       3
//     );

//     const result = await deleteRecette(nouvelleRecette.insertId);
//     expect(result.affectedRows).toBe(1);

//     const recetteSupprimee = await getRecetteById(nouvelleRecette.insertId);
//     expect(recetteSupprimee).toBeNull(); // Vérifie que la recette n'existe plus
//   });
// });

import './helpers/jasmineHelper.js';
import db from '../src/config/dbConfig.js';
import {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
} from '../src/models/RecetteModel.js';

describe('RecetteModel', () => {
  // Nettoyage avant chaque test pour éviter des conflits
  beforeEach(async () => {
    await db.query('DELETE FROM recettes'); // Supprimer toutes les recettes pour un état propre
  });

  it('devrait récupérer toutes les recettes', async () => {
    // Insérer une recette pour le test
    await createRecette(
      'Salade César',
      'Laitue, Poulet, Parmesan, Croûtons, Sauce César',
      'Entrée',
      1
    );

    const recettes = await getAllRecettes();
    expect(recettes).toBeDefined();
    expect(Array.isArray(recettes)).toBe(true);
    expect(recettes.length).toBe(1);
  });

  it('devrait récupérer une recette par ID', async () => {
    const nouvelleRecette = await createRecette(
      'Pizza Margherita',
      'Tomates, Mozzarella, Basilic, Pâte à pizza',
      'Plat principal',
      2
    );

    const recette = await getRecetteById(nouvelleRecette.insertId);
    expect(recette).toBeDefined();
    expect(recette.id).toBe(nouvelleRecette.insertId);
  });

  it('devrait créer une nouvelle recette', async () => {
    const result = await createRecette(
      'Tarte aux pommes',
      'Pommes, Sucre, Beurre, Pâte feuilletée',
      'Dessert',
      3
    );
    expect(result).toBeDefined();
    expect(result.affectedRows).toBe(1);
  });

  it('devrait mettre à jour une recette existante', async () => {
    const nouvelleRecette = await createRecette(
      'Soupe de légumes',
      'Carottes, Pommes de terre, Oignons, Eau',
      'Entrée',
      1
    );

    const result = await updateRecette(
      nouvelleRecette.insertId,
      'Soupe de légumes améliorée',
      'Carottes, Pommes de terre, Oignons, Épices, Eau',
      'Entrée',
      1
    );
    expect(result.affectedRows).toBe(1);

    const updatedRecette = await getRecetteById(nouvelleRecette.insertId);
    expect(updatedRecette.titre).toBe('Soupe de légumes améliorée');
  });

  it('devrait supprimer une recette par ID', async () => {
    const nouvelleRecette = await createRecette(
      'Crêpes au Nutella',
      'Farine, Lait, Oeufs, Nutella',
      'Dessert',
      3
    );

    const result = await deleteRecette(nouvelleRecette.insertId);
    expect(result.affectedRows).toBe(1);

    const recetteSupprimee = await getRecetteById(nouvelleRecette.insertId);
    expect(recetteSupprimee).toBeNull(); // Vérifie que la recette n'existe plus
  });
});
