import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AppetizeParams from 'react-native-appetize-params';

export default function App() {
  const [isAppetize, setIsAppetize] = React.useState<boolean>(false);
  const [foo, setFoo] = React.useState<string>('');

  React.useEffect(() => {
    AppetizeParams.isAppetize().then(setIsAppetize);
    AppetizeParams.get('foo').then(setFoo);
  }, []);

  return (
    <View style={styles.container}>
      <Text>isAppetize: {String(isAppetize)}</Text>
      <Text>foo: {foo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
