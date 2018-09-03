import { GumballMachine } from './GumballMachine.class';
import { IState } from './IState';

export class SoldState implements IState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  public insertQuarter() {
    console.log("Please wait, we're already giving you a gumball");
  }

  public ejectQuarter() {
    console.log('Sorry, you already turned the crank');
  }

  public turnCrank() {
    console.log("Turning twice doesn't get you another gumball!");
  }

  public dispense() {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('Oops, out of gumballs!');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }

  public refill() {}

  public toString(): string {
    return 'dispensing a gumball';
  }
}
