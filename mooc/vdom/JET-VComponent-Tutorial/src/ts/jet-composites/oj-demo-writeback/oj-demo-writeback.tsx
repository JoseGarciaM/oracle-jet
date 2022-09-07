import { h, Component } from 'preact';
import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { ojInputText } from "ojs/ojinputtext";
import "ojs/ojinputtext";
import "ojs/ojformlayout";

type State = {
  value?: string
}

@customElement('oj-demo-writeback')
export class DemoWriteback extends Component<GlobalProps, State> {

  state = {
    value: ""
  };

  render() {
    return (
      <oj-form-layout>
        <oj-input-text value={ this.state.value }
          onvalueChanged={ this.handleValueChanged }
          labelHint="And Me Too!" />
        <span tabIndex={ 0 }>
          The value is: { this.state.value }
        </span>
      </oj-form-layout>
    );
  }

  private handleValueChanged = (event: ojInputText.valueChanged) => {
    this.setState({
      value: event.detail.value
    });
  }
}