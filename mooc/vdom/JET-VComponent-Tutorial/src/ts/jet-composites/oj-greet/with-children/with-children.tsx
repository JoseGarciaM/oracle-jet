import { h, Component, ComponentChildren } from 'preact';
import { customElement, ExtendGlobalProps, Slot } from 'ojs/ojvcomponent';

type Props = {
  preferredGreeting?: string;
  children?: ComponentChildren;
  startIcon?: Slot;
}

/**
 * @ojmetadata pack "oj-greet"
 */
@customElement('oj-greet-with-children')
export class GreetWithChildren extends Component<ExtendGlobalProps<Props>> {
  render(props: ExtendGlobalProps<Props>) {
    const { preferredGreeting, children, startIcon } = props;

    return <p class="centerAlignVertical">
        {startIcon} {preferredGreeting}, {children}!
      </p>;
  }

  static defaultProps: Partial<Props> = {
    preferredGreeting: "Hello"
  };
}