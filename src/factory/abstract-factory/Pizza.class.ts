import { ICheese } from './ingredients/ICheese';
import { IClams } from './ingredients/IClams';
import { IDough } from './ingredients/IDough';
import { IPepperoni } from './ingredients/IPepperoni';
import { ISauce } from './ingredients/ISauce';
import { IVeggies } from './ingredients/IVeggies';

export abstract class Pizza {
  protected name: string;

  protected dough: IDough;
  protected sauce: ISauce;
  protected veggies: IVeggies[];
  protected cheese: ICheese;
  protected pepperoni: IPepperoni;
  protected clams: IClams;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public abstract prepare(): void;

  public bake(): void {
    console.log('Bake for 25 minutes at 350');
  }

  public cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  public box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  public toString(): string {
    let result = '';

    result += `---- ${name} ----\n"`;
    if (this.dough) {
      result += `${this.dough}\n`;
    }
    if (this.sauce) {
      result += `${this.sauce}\n`;
    }
    if (this.cheese) {
      result += `${this.cheese}\n`;
    }
    if (this.veggies) {
      this.veggies.forEach(veggie => {
        result += `${veggie}, `;
      });
      result += '\n';
    }
    if (this.clams) {
      result += `${this.clams}\n`;
    }
    if (this.pepperoni) {
      result += `${this.pepperoni}\n`;
    }
    return result.toString();
  }
}
