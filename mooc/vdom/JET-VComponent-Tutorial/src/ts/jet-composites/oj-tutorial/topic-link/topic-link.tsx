import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps } from 'ojs/ojvcomponent';

type Props = {
  topic: { path: string, label: string };
};

/**
 * @ojmetadata pack "oj-tutorial"
 * @ojmetadata version "1.0.0"
*/
@customElement("oj-tutorial-topic-link")
export class TopicLink extends Component<ExtendGlobalProps<Props>> {

  render(props: ExtendGlobalProps<Props>) {
    const { path, label } = props.topic;
    const ariaLabel = `Go to ${label} topic`;
    const href = `index.html?ojr=${path}`;
    return <a id="foo" href={href} aria-label={ariaLabel}>{label}</a>
  }
}
