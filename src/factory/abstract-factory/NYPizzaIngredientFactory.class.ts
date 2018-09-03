import { FreshClams } from './ingredients/FreshClams.class';
import { Garlic } from './ingredients/Garlic.class';
import { ICheese } from './ingredients/ICheese';
import { IClams } from './ingredients/IClams';
import { IDough } from './ingredients/IDough';
import { IPepperoni } from './ingredients/IPepperoni';
import { ISauce } from './ingredients/ISauce';
import { IVeggies } from './ingredients/IVeggies';
import { MarinaraSauce } from './ingredients/MarinaraSauce.class';
import { Mushroom } from './ingredients/Mushroom';
import { Onion } from './ingredients/Onion.class';
import { ReggianoCheese } from './ingredients/ReggianoCheese.class';
import { SlicedPepperoni } from './ingredients/SlicedPepperoni.class';
import { ThinCrustDough } from './ingredients/ThinCrustDough.class';
import { IPizzaIngredientFactory } from './IPizzaIngredientFactory';

export class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
  public createDough(): IDough {
    return new ThinCrustDough();
  }

  public createSauce(): ISauce {
    return new MarinaraSauce();
  }

  public createCheese(): ICheese {
    return new ReggianoCheese();
  }

  public createVeggies(): IVeggies[] {
    return [new Garlic(), new Onion(), new Mushroom()];
  }

  public createPepperoni(): IPepperoni {
    return new SlicedPepperoni();
  }

  public createClams(): IClams {
    return new FreshClams();
  }
}
