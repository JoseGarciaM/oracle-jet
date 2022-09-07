import { h, Component } from 'preact';
import { customElement, ExtendGlobalProps, ObservedGlobalProps, getUniqueId } from 'ojs/ojvcomponent';
import "ojs/ojinputtext";
import "ojs/ojlabel";

export type Props = {
  defValue?: string;
} & ObservedGlobalProps<'id'>;

@customElement('oj-demo-unique-id')
export class DemoUniqueId extends Component<ExtendGlobalProps<Props>> {

  private uniquePrefix: string;

  constructor(props: Readonly<Props>) {
    super(props)

    this.uniquePrefix = props.id ?? getUniqueId();
  }

  static defaultProps: Partial<Props> = {
    defValue: "Value"
  };

  render(props: Readonly<Props>) {

    const inputTextId = `${this.uniquePrefix}_input`;

    return (
      <div>
        <oj-label for={ inputTextId }>Label</oj-label>
        <oj-input-text id={ inputTextId } value={ props.defValue }/>
      </div>
    );
  }
}