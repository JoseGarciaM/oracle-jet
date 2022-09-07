import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps, Action } from 'ojs/ojvcomponent';
import { TopicLink } from "oj-tutorial/topic-link/loader";

type Props = {
  nextTopic: { path: string, label: string };
  onGotoContents: Action;
};

/**
 * @ojmetadata pack "oj-tutorial"
 * @ojmetadata version "1.0.0"
 * @ojmetadata dependencies {
 *   "oj-tutorial-topic-link": "^1.0.0"
 * }
*/
@customElement('oj-tutorial-next-topic')
export class NextTopic extends Component<ExtendGlobalProps<Props>> {
  render(props: ExtendGlobalProps<Props>) {
    const nextTopic = props.nextTopic;

    if (!nextTopic) {
      return <p>That's all for now!</p>;
    }

    return <p>
        <div>Next Up: <TopicLink topic={nextTopic} /></div>
        <div>
          See: <a tabIndex={0} onClick={this._handleGotoContentsClick}>Table of Contents</a>
        </div>
      </p>;
  }

  private _handleGotoContentsClick = () => {
    this.props.onGotoContents();
  }
}