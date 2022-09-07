import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';

@customElement('oj-hello-world')
export class HelloWorld extends Component<GlobalProps> {
  render() {
    return <div>Hello, World!</div>;
  }
}