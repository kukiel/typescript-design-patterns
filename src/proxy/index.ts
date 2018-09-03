import { Proxy } from './Proxy.class';

export default function() {
  const proxy = new Proxy('Foo');
  proxy.action();
  proxy.action();
}
