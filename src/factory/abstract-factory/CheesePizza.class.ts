import { IPizzaIngredientFactory } from './IPizzaIngredientFactory';
import { Pizza } from './Pizza.class';

export class CheesePizza extends Pizza {
  private ingredientFactory: IPizzaIngredientFactory;

  constructor(ingredientFactory: IPizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  public prepare(): void {
    console.log('Preparing ' + this.name);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}
