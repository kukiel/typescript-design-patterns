import { ISubject } from './ISubject';
import { RealSubject } from './RealSubject.class';

export class Proxy implements ISubject {
  private realSubject: RealSubject;
  private subjectName: string;

  constructor(name: string) {
    this.subjectName = name;
  }

  public action() {
    if (!this.realSubject) {
      this.realSubject = new RealSubject(this.subjectName);
      console.log('RealSubject object was created');
    }

    console.log(`Proxy action (${this.subjectName}) was called.`);
    this.realSubject.action();
  }
}
