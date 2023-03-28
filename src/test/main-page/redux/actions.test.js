import * as actions from '../../../main-page/redux/action';
import * as commonHelper from '../../../root/common/helper/commonHelper';
import {
  UPDATE_USER_ID,
  TRIGGER_PIN,
  VERIFY_PIN,
} from '../../../main-page/redux/constants';
import PhoneService from '../../../api/PhoneService';

describe('fetching profile listing actions', () => {
  test('creates TRIGGER_PIN action', () => {
    const sandbox = require('sinon').sandbox.create();
    const msisdn = '0142373387';
    const userId = '9sfdgsg798uef9w0';
    const fetchApiDataInAction = sandbox.spy(
      commonHelper,
      'fetchApiDataInAction'
    );
    actions.triggerPin(msisdn, userId);
    expect(
      fetchApiDataInAction.calledWith(
        TRIGGER_PIN,
        PhoneService.triggerPin(msisdn, userId)
      )
    ).toBe(true);
    sandbox.restore();
  });

  test('creates VERIFY_PIN action', () => {
    const sandbox = require('sinon').sandbox.create();
    const pin = '0123';
    const userId = '9sfdgsg798uef9w0';
    const fetchApiDataInAction = sandbox.spy(
      commonHelper,
      'fetchApiDataInAction'
    );
    actions.verifyPin(pin, userId);
    expect(
      fetchApiDataInAction.calledWith(
        VERIFY_PIN,
        PhoneService.verifyPin(pin, userId)
      )
    ).toBe(true);
    sandbox.restore();
  });

  it('should create an action to update the user ID', () => {
    const id = 123;
    const expectedAction = {
      type: UPDATE_USER_ID,
      payload: {
        id,
      },
    };
    expect(actions.updateUserId(id)).toEqual(expectedAction);
  });
});
