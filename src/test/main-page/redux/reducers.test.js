import reducer from '../../../main-page/redux/reducer';
import {
  UPDATE_USER_ID,
  TRIGGER_PIN,
  VERIFY_PIN,
} from '../../../main-page/redux/constants';

describe('main-page reducer', () => {
  const initalState = {
    userId: '',
    isFetchingTriggerPin: false,
    isFetchingVerifyPin: false,
  };

  test('should return passed state by default', () => {
    const action = {
      type: '',
      payload: {},
    };
    expect(reducer(initalState, action)).toEqual(initalState);
  });

  test('should return initial state ', () => {
    const action = {
      type: '',
      payload: {},
    };
    expect(reducer(undefined, action)).toEqual({
      userId: '',
      isFetchingTriggerPin: false,
      isFetchingVerifyPin: false,
    });
  });

  test('should handle UPDATE_USER_ID', () => {
    const action = {
      type: UPDATE_USER_ID,
      payload: {
        id: '1234',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      userId: '1234',
    });
  });

  test('should handle TRIGGER_PIN_START', () => {
    const action = {
      type: `${TRIGGER_PIN}_START`,
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingTriggerPin: true,
    });
  });

  test('should handle TRIGGER_PIN_SUCCESS', () => {
    const action = {
      type: `${TRIGGER_PIN}_SUCCESS`,
      payload: {
        value: 'changed',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingTriggerPin: false,
    });
  });

  it('should handle TRIGGER_PIN_ERROR', () => {
    const action = {
      type: `${TRIGGER_PIN}_ERROR`,
      payload: {
        value: 'error',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingTriggerPin: false,
    });
  });

  test('should handle VERIFY_PIN_START', () => {
    const action = {
      type: `${VERIFY_PIN}_START`,
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingVerifyPin: true,
    });
  });

  test('should handle VERIFY_PIN_SUCCESS', () => {
    const action = {
      type: `${VERIFY_PIN}_SUCCESS`,
      payload: {
        value: 'changed',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingVerifyPin: false,
    });
  });

  it('should handle VERIFY_PIN_ERROR', () => {
    const action = {
      type: `${VERIFY_PIN}_ERROR`,
      payload: {
        value: 'error',
      },
    };
    expect(reducer(initalState, action)).toEqual({
      ...initalState,
      isFetchingVerifyPin: false,
    });
  });
});
