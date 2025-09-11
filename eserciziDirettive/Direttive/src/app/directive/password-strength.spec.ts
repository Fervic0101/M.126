import { PasswordStrength } from './password-strength';

describe('PasswordStrength', () => {
  it('should create an instance', () => {
    const directive = new PasswordStrength();
    expect(directive).toBeTruthy();
  });
});
