import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import "ojs/ojavatar";
import { GreetHelloMany, GreetingContext } from 'oj-greet/hello-many/loader';

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-hello-many-parent')
export class GreetHelloManyParent extends Component<GlobalProps> {
  render() {

    const names = [ 'Joel', 'Mike', 'Jonah' ];

    return (
      <div>
        <p>This child is rendered as a custom element:</p>
        <oj-greet-hello-many names={names}>
          <template slot="greetingTemplate" render={ this.renderGreeting }/>
        </oj-greet-hello-many>
        <br />
        <p>This child is rendered as a VComponent class:</p>
        <GreetHelloMany names={names} greetingTemplate={ this.renderGreeting }/>
      </div>
    );
  }

  private renderGreeting(data: GreetingContext) {
    const name = data.name;
    const firstInitial = name.charAt(0);
    const greeting = name.length < 5 ? 'Hey' : 'Hi';

    return (
      <p class="centerAlignVertical">
        <oj-avatar size="xxs" initials={ firstInitial } />
        {greeting}, { name }!
      </p>
    );
  }
}