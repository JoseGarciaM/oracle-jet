import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { GreetWithActions } from 'oj-greet/with-actions/loader'

type State = {
  greeting: string;
};

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-with-actions": "^1.0.0"
 * }
 */
@customElement('oj-greet-with-random-state-parent')
export class GreetWithRandomStateParent extends Component<GlobalProps, State> {

  private static readonly GREETINGS = [
    "Hello", "Hey", "Hola", "Hi", "Sup"
  ];

  state = {
    greeting: this.getRandomGreeting()
  }

  render() {
    return (
      <div>
        <p>This stateless child is re-rendered with a random new greeting
          in response to parent state updates:</p>
        <GreetWithActions preferredGreeting={this.state.greeting}
          onResponseDetected={this.handleResponse}/>
      </div>
    );
  }

  private getRandomGreeting() {
    const greetings = GreetWithRandomStateParent.GREETINGS;

    // Pick a random greeting
    const index = Math.floor(Math.random() * greetings.length);
    return greetings[index];
  }

  private handleResponse= () => {
    this.setState({ greeting: this.getRandomGreeting()});
  }
}