import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { GreetWithActions } from 'oj-greet/with-actions/loader'

enum EngagementLevel {
  Interested,
  Bored,
  Impatient,
  Done
}

type State = {
  engagement: EngagementLevel;
};

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-with-actions": "^1.0.0"
 * }
 */
@customElement('oj-greet-with-state-parent')
export class GreetWithStateParent extends Component<GlobalProps, State> {

  state = {
    engagement: EngagementLevel.Interested
  }

  render() {
    const greeting = this.getGreeting();

    return (
      <div>
        <p>This stateless child is re-rendered with new props in response to
          parent state updates:</p>
        <GreetWithActions preferredGreeting={greeting} onResponseDetected={this.handleResponse}/>
      </div>
    );
  }

  private getGreeting() {
    let greeting;

    switch(this.state.engagement) {
      case EngagementLevel.Bored:
        greeting = "Okay";
        break;
      case EngagementLevel.Impatient:
        greeting = "Whatever";
        break;
      case EngagementLevel.Done:
        greeting = "Later";
        break;
      default:
        greeting = "Hello";
        break;
    }

    return greeting;
  }

  private handleResponse = () => {
    this.setState((state: Readonly<State>) => {
      // Once we have reached the Done state, we return null
      // to indicate that no state update is needed.
      return state.engagement === EngagementLevel.Done ?
        null :
        { engagement: state.engagement + 1 };
    });
  }
}