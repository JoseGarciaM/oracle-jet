import { h, Component } from "preact";
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { GreetWithWriteback } from 'oj-greet/with-writeback/loader'

type State = {
  isRevealed: boolean;
};

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-with-actions": "^1.0.0"
 * }
 */
@customElement('oj-greet-with-writeback-parent')
export class GreetWithWritebackParent extends Component<GlobalProps, State> {

  state = {
    isRevealed: false
  }

  render() {
    return (
      <div>
        <p>This component is re-rendered in response to property changes:</p>
        <GreetWithWriteback revealed={ this.state.isRevealed }
          onRevealedChanged={ this.handleRevealedChanged } />
      </div>
    );
  }

  private handleRevealedChanged = (newValue: boolean) => {
    this.setState({
      isRevealed: newValue
    });
  }
}