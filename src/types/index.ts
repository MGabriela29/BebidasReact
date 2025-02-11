import { z } from "zod";
import { CategoriesAPIResponseSchema, SearFiltersSchema } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearFilters = z.infer<typeof SearFiltersSchema>