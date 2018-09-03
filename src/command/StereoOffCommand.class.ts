import { Stereo } from './Stereo.class';

export class StereoOffCommand {
  private stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }
}
