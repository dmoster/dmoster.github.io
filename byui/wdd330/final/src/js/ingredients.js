import { ingredientsList } from '../data/ingredientsList.js';
import { loadCalculator } from './view.js';


export function getIngredients(firstLetter) {
  const ingredients = ingredientsList.filter(ingredient => {
    return ingredient.name.charAt(0) === firstLetter;
  });

  loadCalculator(ingredients);
}