import { Config } from './Config.class';

export default function() {
  const cfg = Config.getInstance();
  console.log(cfg.getConfig());

  const cfg2 = Config.getInstance();
  cfg2.setConfig('color', '#ffffff');

  console.log(cfg.getConfig());
  console.log(cfg2.getConfig());
}
