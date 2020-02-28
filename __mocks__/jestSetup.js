import { NativeModules as RNNativeModules } from "react-native";
import MockAsyncStorage from 'mock-async-storage';
const mockImpl = new MockAsyncStorage()


RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: "BEGAN", FAILED: "FAILED", ACTIVE: "ACTIVE", END: "END" },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false
};
jest.mock('react-navigation', () => ({
  NavigationEvents: 'mockNavigationEvents',
}),
  '@react-native-community/async-storage', () => mockImpl);
// jest.setMock('AsyncStorage', AsyncStorage);
