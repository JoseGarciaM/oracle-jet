import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { h, Component } from 'preact';
import 'ojs/ojbutton';

type State = {
  showGreeting: boolean;
};

/**
 * A component using an <oj-button> to trigger an action
 *
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 */
@customElement('greet-with-button')
export class GreetWithButton extends Component<GlobalProps, State> {
  state = { showGreeting: false };

  handleAction = () => {
    this.setState({ showGreeting: true });
  };

  render() {
    return (
      <div
        class='oj-web-applayout-max-width oj-web-applayout-content'
        data-oj-binding-provider='preact'>
        <oj-button onojAction={this.handleAction}>Show message</oj-button>
        {this.state.showGreeting ? <p>Button clicked!</p> : null}
      </div>
    );
  }
}
