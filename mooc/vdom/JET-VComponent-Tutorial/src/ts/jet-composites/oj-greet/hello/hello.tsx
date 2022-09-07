import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-hello')
export class GreetHello extends Component<GlobalProps> {
  render() {
    return <p>Hello, World!</p>;
  }
}