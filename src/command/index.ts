import { RemoteControl } from './RemoteControl.class';
import { Stereo } from './Stereo.class';
import { StereoOffCommand } from './StereoOffCommand.class';
import { StereoOnCommand } from './StereoOnCommand.class';
import { TV } from './TV.class';
import { TVOffCommand } from './TVOffCommand.class';
import { TVOnCommand } from './TVOnCommand.class';

export default function() {
  const remote = new RemoteControl();
  const tv = new TV();
  const stereo = new Stereo();
  const tvOnCommand = new TVOnCommand(tv);
  const tvOffCommand = new TVOffCommand(tv);
  const stereoOnCommand = new StereoOnCommand(stereo);
  const stereoOffCommand = new StereoOffCommand(stereo);

  remote.setCommand(tvOnCommand);
  remote.onButtonPressed();

  remote.setCommand(tvOffCommand);
  remote.onButtonPressed();

  remote.setCommand(stereoOnCommand);
  remote.onButtonPressed();

  remote.setCommand(stereoOffCommand);
  remote.onButtonPressed();
}
