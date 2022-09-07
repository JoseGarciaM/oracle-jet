import { h } from 'preact';
import { FoodList } from 'food-list/food-list';
import { HelloWorld } from 'hello-world/hello-world';
import { GreetWithButton } from 'greet-with-button/greet-with-button';

/**
 * A functional component which displays every component in the application
 */
export function Content() {
  return (
    <div>
      <p>
        <h3>hello-world.tsx</h3>
        <HelloWorld />
      </p>
      <p>
        <h3>greet-with-button.tsx</h3>
        <GreetWithButton />
      </p>
      <p>
        <h3>food-list.tsx</h3>
        <FoodList />
      </p>
    </div>
  );
}
