import { UpperCase } from './upper-case';

describe('UpperCase', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('input') } as any;
    const directive = new UpperCase(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
