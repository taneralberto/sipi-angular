import { Component } from '@angular/core';
import { IRecipe } from '../../models/recipe.interface';
import { CommonModule, NgFor } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  public isUpdate = false;
  public newRecipe = {
    id: 0,
    name: '',
    description: '',
    ingredients: '',
  }

  public recipes: IRecipe[] = [
    {
      id: 1,
      name: 'Recipe 1',
      description: 'Recipe 1 description',
      ingredients: new Set<string>(['ingredient 1', 'ingredient 2', 'ingredient 3']),
    },
    {
      id: 2,
      name: 'Recipe 2',
      description: 'Recipe 2 description',
      ingredients: new Set<string>(['ingredient 4', 'ingredient 5', 'ingredient 6']),
    }
  ];

  public add(event: Event) {
    event.preventDefault();

    const ingredients = new Set<string>();
    this.newRecipe.ingredients.split(',').map((ingredient) => {
      ingredients.add(ingredient)
    })

    this.recipes.push({
      id: this.recipes.length + 1,
      name: this.newRecipe.name,
      description: this.newRecipe.description,
      ingredients: ingredients,
    })
  }

  public update(event: Event) {
    event.preventDefault();

    this.remove(this.newRecipe.id);
    this.add(event);
  }

  public get(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      console.log('entre')
      const recipeFound = this.recipes.find((recipe) => this.newRecipe.id === recipe.id);

      if(recipeFound) {
        console.log('newl')
        this.newRecipe = {
          id: recipeFound.id,
          name: recipeFound.name,
          description: recipeFound.description ?? '',
          ingredients: recipeFound.ingredients.values().next().value ?? '',
        }
      }
    }
  }

  public remove(id: number) {
    const newRecipes: IRecipe[] = this.recipes.filter((recipe) => {
      return recipe.id !== id
    });

    this.recipes = newRecipes;
  }

}
