import { h } from 'preact';
import { GreetWithButton } from 'greet-with-button/greet-with-button';
import { render, fireEvent } from '@testing-library/preact';

describe('Test Content', () => {
  test('Greeting after button click', async () => {
    const content = render(<GreetWithButton />);
    const message = 'Button clicked!';
    // message initially hidden
    expect(content.queryByText(message)).toBeNull();
    // click button to show message
    const button = await content.findByRole('button');
    fireEvent.click(button);

    const messageEl = await content.findByText(message);
    expect(messageEl).not.toBeUndefined;
  });
});
