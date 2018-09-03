import { ConcreteCollection } from './ConcreteCollection.class';

export default function() {
  const numbers = [1, 2, 3, 4, 5];
  const concreteCollection = new ConcreteCollection(numbers);
  const iterator = concreteCollection.createIterator();

  while (iterator.hasNext()) {
    console.log(`Log iterator value: ${iterator.next()}`);
  }
}
