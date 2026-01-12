
export interface IngredientItem {
  _id: {
    $oid: string;
  };
  id: number;
  name: string;
  price: number;
  image: string;
  isSelected?: boolean;
}
export interface Ingredient {
  id: number;
  name: string;
}

export interface Topping {
  id: number;
  name: string;
  price: number;
  isSelected?: boolean;
}

export interface Pizzax {
  id: number;
  type: 'veg' | 'nonveg';
  price: number;
  name: string;
  ingred: string;
  tops:string;
  image: string;
  description: string;
  ingredients: Ingredient[];
  topping: Topping[];
  quantity: number;
  isSelected: boolean;
}

export class Pizzamodel {

}
