import { ICheese } from './ingredients/ICheese';
import { IClams } from './ingredients/IClams';
import { IDough } from './ingredients/IDough';
import { IPepperoni } from './ingredients/IPepperoni';
import { ISauce } from './ingredients/ISauce';
import { IVeggies } from './ingredients/IVeggies';

export interface IPizzaIngredientFactory {
  createDough(): IDough;
  createSauce(): ISauce;
  createCheese(): ICheese;
  createVeggies(): IVeggies[];
  createPepperoni(): IPepperoni;
  createClams(): IClams;
}