export function MalaysianPhoneValid(value: string): boolean {
  const MalaysianPhoneRegex =
    /^(\B\+60[1-9]\d?|\b0[1-9]\d?)([-. ]?\d{3,4}[-. ]?\d{3,5})\b$/;
  return MalaysianPhoneRegex.test(value);
}

export function generateUserId(): string {
  const randomString = Math.random().toString(36).substring(2, 8);
  const timestamp = Date.now().toString().substring(6);
  return `user_${randomString}${timestamp}`;
}
