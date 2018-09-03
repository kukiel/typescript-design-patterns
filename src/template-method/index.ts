import { Coffee } from './Coffee.class';
import { Tea } from './Tea.class';

export default function() {
  const tea = new Tea();
  const coffee = new Coffee();

  tea.prepareRecipe();
  coffee.prepareRecipe();
}
