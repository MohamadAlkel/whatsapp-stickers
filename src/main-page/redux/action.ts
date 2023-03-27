import { fetchApiDataInAction } from '../../root/common/helper/commonHelper';
import { TRIGGER_PIN, VERIFY_PIN, UPDATE_USER_ID } from './constants';
import PhoneService from '../../api/PhoneService';

export function triggerPin(msisdn, userId) {
  return fetchApiDataInAction(
    TRIGGER_PIN,
    PhoneService.triggerPin(msisdn, userId)
  );
}

export function verifyPin(pin, userId) {
  return fetchApiDataInAction(VERIFY_PIN, PhoneService.verifyPin(pin, userId));
}

export function updateUserId(id) {
  return {
    type: UPDATE_USER_ID,
    payload: {
      id,
    },
  };
}
