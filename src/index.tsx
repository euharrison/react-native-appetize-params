import { NativeModules, Platform, Settings } from 'react-native';

type AppetizeParamsType = {
  get: (key: string) => Promise<string>;
  isAppetize: () => Promise<boolean>;
};

const AppetizeIOS = {
  get: (key: string) => Promise.resolve(Settings.get(key)),
  isAppetize: () => Promise.resolve(Settings.get('isAppetize')),
};

const AppetizeParams =
  Platform.OS === 'ios' ? AppetizeIOS : NativeModules.AppetizeParams;

export default AppetizeParams as AppetizeParamsType;
