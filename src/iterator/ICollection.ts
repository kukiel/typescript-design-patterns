import { IIterator } from './IIterator';

export interface ICollection<T> {
  createIterator(): IIterator<T>;
}
