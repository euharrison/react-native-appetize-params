import { NativeModules } from 'react-native';

type AppetizeParamsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AppetizeParams } = NativeModules;

export default AppetizeParams as AppetizeParamsType;
