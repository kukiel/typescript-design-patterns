import { MenuComponent } from './MenuComponent.class';

export class Waitress {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu(): void {
    this.allMenus.print();
  }
}
