export class ConcreteIterator implements Iterator<number> {
  private _collection: number[];
  private _index: number = 0;

  constructor(newCollection: number[]) {
    this._collection = newCollection;
  }

  next(): any {
    const result = this._collection[this._index];
    this._index += 1;
    return result;
  }

  hasNext(): boolean {
    return this._index < this._collection.length;
  }
}
