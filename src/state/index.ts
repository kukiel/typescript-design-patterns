import { GumballMachine } from './GumballMachine.class';

export default function() {
  const gumballMachine = new GumballMachine(2);

  gumballMachine.log();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.log();

  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.refill(5);
  gumballMachine.insertQuarter();
  gumballMachine.turnCrank();

  gumballMachine.log();
}
