import { GumballMachine } from './GumballMachine.class';
import { IState } from './IState';

export class HasQuarterState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public insertQuarter() {
    console.log("You can't insert another quarter");
  }

  public ejectQuarter() {
    console.log('Quarter returned');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  public turnCrank() {
    console.log('You turned...');
    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }

  public dispense() {
    console.log('No gumball dispensed');
  }

  public refill() {}

  public toString(): string {
    return 'waiting for turn of crank';
  }
}
