import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps } from 'ojs/ojvcomponent';

type Props = {
  preferredGreeting?: string;
}

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
 */
@customElement('oj-greet-with-state')
export class GreetWithState extends Component<ExtendGlobalProps<Props>, State> {

  state = {
    engagement: EngagementLevel.Interested
  }

  render() {
    const greeting = this.getGreeting();

    return (
      <div onClick={this._handleClick}>
        <p>{greeting}, World!</p>
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
        greeting = this.props.preferredGreeting;
        break;
    }

    return greeting;
  }

  private _handleClick = (event: MouseEvent) => {
    this.setState((state: Readonly<State>) => {
      // Once we have reached the Done state, we return null
      // to indicate that no state update is needed.
      return state.engagement === EngagementLevel.Done ?
        null :
        { engagement: state.engagement + 1 };
    });
  }

  static defaultProps: Partial<Props> = {
    preferredGreeting: "Hello"
  };
}
