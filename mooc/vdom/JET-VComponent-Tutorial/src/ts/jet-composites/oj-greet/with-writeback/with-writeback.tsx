import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps, PropertyChanged } from 'ojs/ojvcomponent';
import { ojButton } from "ojs/ojbutton";
import "ojs/ojbutton";

type Props = {
  revealed?: boolean;
  onRevealedChanged?: PropertyChanged<boolean>;
}

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-with-writeback')
export class GreetWithWriteback extends Component<ExtendGlobalProps<Props>> {
  render({ revealed }) {
    const buttonMessage = `Click to ${revealed ? ' hide' : 'show'} your greeting!`

    return (
      <div>
        <oj-button onojAction={ this.handleAction }>
          { buttonMessage }
        </oj-button>
        <div>
          { revealed ? 'Hello, World!' : null }
        </div>
      </div>
    );
  }

  private handleAction = (event: ojButton.ojAction) => {
    this.props.onRevealedChanged?.(!this.props.revealed);
  }

  static defaultProps: Partial<Props> = {
    revealed: false
  };
}