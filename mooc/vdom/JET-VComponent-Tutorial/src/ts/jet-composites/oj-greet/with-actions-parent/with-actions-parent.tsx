import { h, Component } from 'preact';
import { customElement, GlobalProps, Action } from 'ojs/ojvcomponent';
import { GreetWithActions, ResponseDetectedDetail } from 'oj-greet/with-actions/loader';

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-with-actions": "^1.0.0"
 * }
 */
@customElement('oj-greet-with-actions-parent')
export class GreetWithActionsParent extends Component<GlobalProps> {
  render() {
    return (
      <div>
        <p>This child is rendered as a custom element:</p>
        <oj-greet-with-actions onresponseDetected={this.handleEventResponse}/>

        <p>This child is rendered as a VComponent class:</p>
        <GreetWithActions onResponseDetected={this.handleActionResponse}/>
      </div>
    );
  }

  private handleEventResponse = (event: CustomEvent<ResponseDetectedDetail>) => {
    this.logResponseDetected(event.detail.urgent);
  }

  private handleActionResponse = (detail: ResponseDetectedDetail) => {
    this.logResponseDetected(detail.urgent);
  }

  private logResponseDetected(urgent: boolean) {
    const responseType = urgent ? 'Urgent' : 'Non-urgent';
    console.log(`${responseType} response detected.`);
  }
}