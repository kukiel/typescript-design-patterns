export abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected toppings: string[] = [];

  public getName(): string {
    return this.name;
  }

  public prepare(): void {
    console.log('Preparing ' + name);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings: ');
    this.toppings.forEach(topping => {
      console.log(`   ${topping}`);
    });
  }

  public bake(): void {
    console.log('Baking ' + name);
  }

  public cut(): void {
    console.log('Cutting ' + name);
  }

  public box(): void {
    console.log('Boxing ' + name);
  }

  public toString(): string {
    let display: string = '';
    display += `---- ${this.name} ----\n`;
    display += `${this.dough}\n`;
    display += `${this.sauce}\n`;

    this.toppings.forEach(topping => {
      display += `${topping}\n`;
    });

    return display;
  }
}
