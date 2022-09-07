import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps, TemplateSlot } from 'ojs/ojvcomponent';

export type GreetingContext = {
  name: string;
}

type Props = {
  names: Array<string>;
  greetingTemplate?: TemplateSlot<GreetingContext>;
}

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-hello-many')
export class GreetHelloMany extends Component<ExtendGlobalProps<Props>> {
  render() {
    return (
      <div>
        {
          this.props.names.map((name) => {
            return this.props.greetingTemplate?.({ name }) ||
                     <div>Hello, { name }!</div>
          })
        }
      </div>
    );
  }
}