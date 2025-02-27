import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkSchema, RecipeAPIResponseSchema, RecipesAPIResponseSchema, SearFiltersSchema } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearFilters = z.infer<typeof SearFiltersSchema>
export type Recipes = z.infer<typeof RecipeAPIResponseSchema>
export type Drink = z.infer<typeof DrinkSchema>
export type Recipe = z.infer<typeof RecipesAPIResponseSchema>