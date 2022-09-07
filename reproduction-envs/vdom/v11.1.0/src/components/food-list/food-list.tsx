import { customElement, GlobalProps } from 'ojs/ojvcomponent';
import { h, Component } from 'preact';
import ADP from 'ojs/ojarraydataprovider';
import 'ojs/ojlistview';
import 'ojs/ojlistitemlayout';

type Food = {
  id: string | number;
  label: string;
};

const data = new ADP<string, Food>(
  [
    { id: 'hotdogs', label: 'Hot Dogs' },
    { id: 'hamburgers', label: 'Hamburgers' },
    { id: 'frenchfries', label: 'French Fries' }
  ],
  { keyAttributes: 'id' }
);


/**
 * A component using an <oj-list-view> to render custom list items
 *
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 */
@customElement('food-list')
export class FoodList extends Component<GlobalProps> {
  renderListItem(row: { data: Food }) {
    return (
      <oj-list-item-layout>
        <span role='option'>{row.data.label}</span>
      </oj-list-item-layout>
    );
  }

  render() {
    return (
      <div>
        <oj-list-view data={data}>
          <template slot='itemTemplate' render={this.renderListItem} />
        </oj-list-view>
      </div>
    );
  }
};
