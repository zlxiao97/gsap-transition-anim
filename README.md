# @zlxiao97/gsap-transition-anim

[![npm version](https://img.shields.io/npm/v/@zlxiao97/gsap-transition-anim.svg)](https://www.npmjs.com/package/@zlxiao97/gsap-transition-anim)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A JavaScript library for creating entrance and exit animations for visual screens. This library is designed to work seamlessly with React and react-router-dom, and utilizes the power of GSAP for smooth animations.

## Features

- Create engaging entrance and exit animations for your visual screen applications.
- Seamlessly integrate with React and react-router-dom.
- Utilize the animation capabilities of GSAP for high-quality animations.
- Easily customize and configure animations to match your application's design.

## Installation

Make sure you have React and react-router-dom installed in your project before using this library. You can install the library via npm:


```bash
npm install react react-router-dom @zlxiao97/gsap-transition-anim
```

## Usage

1. Import the necessary hook from the library:

```js
import { useAnimation } from "@zlxiao97/gsap-transition-anim";
```

2. Use the `useAnimation` hook in your components. The animations will be triggered when your component is added to the DOM or your component will be removed from the DOM, For more details, check the [Reference](#reference):

```js
export default () => {
  const [ids] = useAnimation([
  { targets: ["l1", "l2"], vars: { x: "-500px" } },
  {
    targets: ["r1", "r2"],
    vars: { x: `${screenWidth + 500}px` }
  },
  {
    targets: ["m1"],
    vars: { y: `-600px` }
  }
  ]);
  const {l1, m1, r1, l2, r2 } = ids
  return (
    <div>
      <div id={l1}>l1</div>
      <div id={m1}>m1</div>
      <div id={r1}>r1</div>
      <div id={l2}>l2</div>
      <div id={r2}>r2</div>
    </div>
  );
};
```

3. use our `useNavigate` hook to replace React Router's：

```js
// replace:
import { useNavigate } from "react-router-dom";
// to:
import { useNavigate } from "@zlxiao97/gsap-transition-anim";
```

## Reference

### `useAnimation` Hook

The `useAnimation` hook allows you to register entrance and exit animations for elements within your visual screens. It simplifies the process of animating elements on entrance and exit without requiring you to explicitly specify the end state of animation.
#### Parameters

- `animationConfig` (Array): An array of animation configuration objects.

#### Animation Configuration Object

Each object in the `animationConfig` array should have the following properties:

- `targets` (string): A readable and non-repetitive identification string `key`, you don't have to use a library like `uuid` to generate it, you can pass this identifier as a key to get the auto-generated element `id` in the `ids` object returned by `useAnimation` and bind it to the animated element.
- `vars` (object): An object containing all the properties/values you want to animate. This represent the initial state of the animation.

#### Tips

- Exit animations are automatically generated based on the provided entrance animation configurations. The exit animation's initial properties will be the same as the final state of the entrance animation.

### `useNavigate` hook

Almost the same as the `useNavigate` hook of react router, the only difference is that it will delay for a while before the page jumps to wait for the exit animation to complete.

## Example

For a complete example of using the library, check out our [demo application](https://codesandbox.io/p/sandbox/gsap-fade-enter-leave-4wfnvt?file=/src/pages/PageA.js:3,1-17,38).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/zlxiao97/gsap-transition-anim/blob/main/LICENSE) file for details.
