import { TV } from './TV.class';

export class TVOffCommand {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  public execute(): void {
    this.tv.off();
  }
}
