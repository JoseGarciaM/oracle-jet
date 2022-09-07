import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-with-listeners')
export class GreetWithListeners extends Component<GlobalProps> {
  render() {
    return (
      <div>
        <div onClick={this._handleEvent}>
          <p>Hello, World!</p>
        </div>
        <oj-button onojAction={this._handleEvent}>Click Me</oj-button>
      </div>
    );
  }

  private _handleEvent = (event: Event) => {
    console.log(`Received ${event.type} event`)
  }
}