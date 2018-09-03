import { HasQuarterState } from './HasQuarterState.class';
import { IState } from './IState';
import { NoQuarterState } from './NoQuarterState.class';
import { SoldOutState } from './SoldOutState.class';
import { SoldState } from './SoldState.class';

export class GumballMachine {
  soldOutState: IState;
  noQuarterState: IState;
  hasQuarterState: IState;
  soldState: IState;

  state: IState;
  count: number = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  public insertQuarter() {
    this.state.insertQuarter();
  }

  public ejectQuarter() {
    this.state.ejectQuarter();
  }

  public turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  public releaseBall() {
    console.log('A gumball comes rolling out the slot...');
    if (this.count != 0) {
      this.count = this.count - 1;
    }
  }

  public getCount(): number {
    return this.count;
  }

  public refill(count: number) {
    this.count += count;
    console.log("The gumball machine was just refilled; it's new count is: " + count);
    this.state.refill();
  }

  setState(state: IState) {
    this.state = state;
  }
  public getState(): IState {
    return this.state;
  }

  public getSoldOutState(): IState {
    return this.soldOutState;
  }

  public getNoQuarterState(): IState {
    return this.noQuarterState;
  }

  public getHasQuarterState(): IState {
    return this.hasQuarterState;
  }

  public getSoldState(): IState {
    return this.soldState;
  }

  public log() {
    console.log(`Inventory: ${this.count} gumball`);
    console.log(`Machine is ${this.state}`);
  }
}
