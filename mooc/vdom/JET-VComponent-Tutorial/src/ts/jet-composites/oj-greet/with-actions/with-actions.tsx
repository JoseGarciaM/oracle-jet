import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps, Action } from 'ojs/ojvcomponent';

export type ResponseDetectedDetail = {
  urgent: boolean;
}

type Props = {
  preferredGreeting?: string;
  onResponseDetected?: Action<ResponseDetectedDetail>;
}

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-with-actions')
export class GreetWithActions extends Component<ExtendGlobalProps<Props>> {
  render(props: ExtendGlobalProps<Props>) {
    return (
      <div onClick={this._handleClick}>
        <p>{props.preferredGreeting}, World!</p>
      </div>
    );
  }

  private _handleClick = (event: MouseEvent) => {
    // Pass in a detail payload.  Determine urgency based on
    // number of clicks.
    this.props.onResponseDetected?.({
      urgent: event.detail > 1
    });
  }

  static defaultProps: Partial<Props> = {
    preferredGreeting: "Hello"
  };
}