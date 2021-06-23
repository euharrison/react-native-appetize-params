# react-native-appetize-params

Get query parameters from url when runing in Appetize environment

Ref: https://docs.appetize.io/core-features/playback-options

## Installation

```sh
npm install react-native-appetize-params
```

## Usage

```js
import AppetizeParams from "react-native-appetize-params";

// ...

const isAppetize = await AppetizeParams.isAppetize();
const foo = await AppetizeParams.get('foo');

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
