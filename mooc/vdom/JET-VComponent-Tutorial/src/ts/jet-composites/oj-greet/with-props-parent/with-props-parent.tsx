import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { GreetWithProps } from 'oj-greet/with-props/loader'

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-with-props": "^1.0.0"
 * }
 */
@customElement('oj-greet-with-props-parent')
export class GreetWithPropsParent extends Component<GlobalProps> {
  render() {
    return (
      <div>
        <p>This child is rendered as a custom element:</p>
        <oj-greet-with-props preferredGreeting="Hey there"/>

        <p>This child is rendered as a VComponent class:</p>
        <GreetWithProps preferredGreeting="Hola"/>
      </div>
    );
  }
}