import { h } from 'preact';
import { HelloWorld } from 'hello-world/hello-world';
import { render } from '@testing-library/preact';

describe('Test Hello World', () => {
  test('renders from value-based component', async () => {
    const text = 'Hello from hello-world!';
    const content = render(<HelloWorld />);

    const textEl = await content.findByText(text);
    expect(textEl.textContent).toEqual(text);
  });

  test('renders from custom-element', async () => {
    const text = 'Hello from hello-world!';
    const content = render(
      // custom elements need to set data-oj-binding-provider='preact'
      <hello-world data-oj-binding-provider='preact'></hello-world>
    );

    const textEl = await content.findByText(text);
    expect(textEl.textContent).toEqual(text);
  });
});
