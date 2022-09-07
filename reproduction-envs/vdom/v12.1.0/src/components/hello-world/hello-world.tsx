import { customElement, ExtendGlobalProps } from 'ojs/ojvcomponent';
import { h, Component, ComponentChild } from 'preact';

type Props = {
  message?: string;
};

/**
 * A Preact class-based component which accepts a "message" property
 *
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 */
@customElement('hello-world')
export class HelloWorld extends Component<ExtendGlobalProps<Props>> {
  static defaultProps: Partial<Props> = {
    message: 'Hello from hello-world!'
  };

  render(props: Props): ComponentChild {
    return <span>{props.message}</span>;
  }
}
