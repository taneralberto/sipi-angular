export interface IRecipe {
  id: number;
  name: string;
  description?: string;
  ingredients: Set<string>;
}