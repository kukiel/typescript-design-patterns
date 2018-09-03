export abstract class MenuComponent {
  public add(MenuComponent: MenuComponent): void {
    throw 'Unsupported Opeartion Exception';
  }
  public remove(menuComponent: MenuComponent): void {
    throw 'Unsupported Opeartion Exception';
  }
  public getChild(i: number): MenuComponent {
    throw 'Unsupported Opeartion Exception';
  }

  public getName(): string {
    throw 'Unsupported Opeartion Exception';
  }
  public getDescription(): string {
    throw 'Unsupported Opeartion Exception';
  }
  public getPrice(): number {
    throw 'Unsupported Opeartion Exception';
  }
  public isVegetarian(): boolean {
    throw 'Unsupported Opeartion Exception';
  }

  public print(): void {
    throw 'Unsupported Opeartion Exception';
  }
}
