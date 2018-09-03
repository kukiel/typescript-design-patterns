import { GumballMachine } from './GumballMachine.class';
import { IState } from './IState';

export class SoldOutState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public insertQuarter() {
    console.log("You can't insert a quarter, the machine is sold out");
  }

  public ejectQuarter() {
    console.log("You can't eject, you haven't inserted a quarter yet");
  }

  public turnCrank() {
    console.log('You turned, but there are no gumballs');
  }

  public dispense() {
    console.log('No gumball dispensed');
  }

  public refill() {
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public toString(): string {
    return 'sold out';
  }
}
