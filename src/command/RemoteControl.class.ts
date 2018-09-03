import { ICommand } from './ICommand';

export class RemoteControl {
  private button: ICommand;

  public setCommand(command: ICommand): void {
    this.button = command;
  }

  public onButtonPressed(): void {
    this.button.execute();
  }
}
