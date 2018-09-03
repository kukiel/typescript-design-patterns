import { Bark } from './Bark.class';
import { Cat } from './Cat.class';
import { Dog } from './Dog.class';

export default function() {
  const dog: Dog = new Dog('Max');
  dog.sayMyName();
  dog.makeSound();

  const cat: Cat = new Cat('Susie');
  cat.sayMyName();
  cat.makeSound();

  const weirdCat = new Cat('Weirdo');
  weirdCat.sayMyName();
  weirdCat.makeSound();
  weirdCat.setSoundBehaviour(new Bark());
  weirdCat.makeSound();
}
