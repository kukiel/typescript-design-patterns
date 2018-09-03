import { ConcreteIterator } from './ConcreteIterator.class';
import { ICollection } from './ICollection';
import { IIterator } from './IIterator';

export class ConcreteCollection implements ICollection<number> {
  private _collection: number[] = [];

  constructor(collection: number[]) {
    this._collection = collection;
  }

  public createIterator(): IIterator<number> {
    return new ConcreteIterator(this._collection);
  }
}
