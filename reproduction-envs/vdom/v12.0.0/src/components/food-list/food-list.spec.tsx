import { h } from 'preact';
import { render } from '@testing-library/preact';
import { FoodList } from 'food-list/food-list';

describe('FoodList tests', () => {
  test('renders from value component', async () => {
    const content = render(
      <div data-oj-binding-provider='preact'>
        <FoodList />
      </div>
    );
    const hotdog = await content.findByText('Hot Dogs');
    expect(hotdog).not.toBeUndefined;
  });
});
