import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import "ojs/ojavatar";
import { GreetWithChildren } from 'oj-greet/with-children/loader'

/**
 * @ojmetadata pack "oj-greet"
 * @ojmetadata dependencies {
 *   "oj-greet-with-children": "^1.0.0"
 * }
 */
@customElement('oj-greet-with-children-parent')
export class GreetWithChildrenParent extends Component<GlobalProps> {
  render() {
    return (
      <div>
        <p>This child is rendered as a custom element:</p>
        <oj-greet-with-children>
          <oj-avatar slot="startIcon" initials="HW" size="xs"></oj-avatar>
          World
        </oj-greet-with-children>

        <p>This child is rendered as a VComponent class:</p>
        <GreetWithChildren startIcon={<oj-avatar initials="HW" size="xs"/>}>
          World
        </GreetWithChildren>
      </div>
    );
  }
}