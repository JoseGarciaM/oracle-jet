import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps } from 'ojs/ojvcomponent';

type Props = {
  preferredGreeting?: string;
}

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-with-props')
export class GreetWithProps extends Component<ExtendGlobalProps<Props>> {

  render(props: ExtendGlobalProps<Props>) {
    const greeting = props.preferredGreeting;

    return <p>{ greeting }, World!</p>;
  }

  static defaultProps: Partial<Props> = {
    preferredGreeting: "Hello"
  };
}