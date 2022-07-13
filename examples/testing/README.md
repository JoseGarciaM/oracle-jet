# Testing Oracle JET

I’ve been working with Oracle JET for a few months now. I’m impressed, but one thing I’ve found lacking is much community documentation on how to test JET apps and the confusion on testing them. I thought I’d write an introductory post on testing Oracle’s JET applications. In this repo you will find samples in MVVM and VDOM architectures.

## When to Test

Start testing early! We recommend you begin writing tests as soon as you can. The longer you wait to add tests to your application, the more dependencies your application will have, and the harder it will be to start.

## Testing Types
When designing your JET application's testing strategy, you should leverage the following testing types:

- Unit: Checks that inputs to a given function, class, or composable are producing the expected output or side effects.
- Component: Checks that your component mounts, renders, can be interacted with, and behaves as expected. These tests import more code than unit tests, are more complex, and require more time to execute.
- End-to-end: Checks features that span multiple pages and make real network requests against your production-built JET application. These tests often involve standing up a database or other backend.

Each testing type plays a role in your application's testing strategy and each will protect you against different types of issues.

## Overview
We will briefly discuss what each of these are, how they can be implemented for JET applications, and provide some general recommendations.

## Prerequesites
1) [Install Node.js](https://docs.oracle.com/en/middleware/developer-tools/jet/10/develop/choose-development-environment-oracle-jet.html#GUID-2B7F94A4-0699-47B6-96A9-C6E94B1BCF10)

2) Install Oracle JET Tooling

```bash
[sudo] npm install -g @oracle/ojet-cli
```
3) Run the following to check installation succeeded and to see the available commands:

```bash
ojet help
```

## Unit Testing
Unit tests are written to verify that small, isolated units of code are working as expected. A unit test usually covers a single function, class, composable, or module. Unit tests focus on logical correctness and only concern themselves with a small portion of the application's overall functionality. They may mock large parts of your application's environment (e.g. initial state, complex classes, 3rd party modules, and network requests).

In general, unit tests will catch issues with a function's business logic and logical correctness.

These are typically plain JavaScript / TypeScript modules unrelated to JET. In general, writing unit tests for business logic in JET applications does not differ significantly from applications using other frameworks.

## Component Testing
In JET applications, components are the main building blocks of the UI. Components are therefore the natural unit of isolation when it comes to validating your application's behavior. From a granularity perspective, component testing sits somewhere above unit testing and can be considered a form of integration testing. Much of your JET Application should be covered by a component test and we recommend that each JET component has its own spec file.

Component tests should catch issues relating to your component's props, events, slots that it provides, styles, classes, lifecycle hooks, and more.

Component tests should not mock child components, but instead test the interactions between your component and its children by interacting with the components as a user would. For example, a component test should click on an element like a user would instead of programmatically interacting with the component.

Component tests should focus on the component's public interfaces rather than internal implementation details. For most components, the public interface is limited to: events emitted, props, and slots. When testing, remember to test what a component does, not how it does it.

### DO

- For Visual logic: assert correct render output based on inputted props and slots.

- For Behavioral logic: assert correct render updates or emitted events in response to user input events.

### DON'T

- Don't assert the private state of a component instance or test the private methods of a component. Testing implementation details makes the tests brittle, as they are more likely to break and require updates when the implementation changes.

- The component's ultimate job is rendering the correct DOM output, so tests focusing on the DOM output provide the same level of correctness assurance (if not more) while being more robust and resilient to change.

- Don't rely exclusively on snapshot tests. Asserting HTML strings does not describe correctness. Write tests with intentionality.

- If a method needs to be tested thoroughly, consider extracting it into a standalone utility function and write a dedicated unit test for it. If it cannot be extracted cleanly, it may be tested as a part of a component, integration, or end-to-end test that covers it.