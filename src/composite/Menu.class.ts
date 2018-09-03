import { MenuComponent } from './MenuComponent.class';

export class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  public add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter(mc => mc !== menuComponent);
  }

  public getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print(): void {
    console.log(`\n ${this.getName()}, ${this.getDescription()}`);
    console.log('---------------------');

    this.menuComponents.forEach(menuComponent => menuComponent.print());
  }
}
