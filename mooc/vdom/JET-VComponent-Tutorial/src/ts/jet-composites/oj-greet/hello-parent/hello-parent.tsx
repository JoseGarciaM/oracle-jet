import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { GreetHello } from 'oj-greet/hello/loader'

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-hello": "^1.0.0"
 * }
 */
@customElement('oj-greet-hello-parent')
export class GreetHelloParent extends Component<GlobalProps> {
  render() {
    return (
      <div>
        <p>This child is rendered as a custom element:</p>
        <oj-greet-hello />

        <p>This child is rendered as a VComponent class:</p>
        <GreetHello />
      </div>
    );
  }
}