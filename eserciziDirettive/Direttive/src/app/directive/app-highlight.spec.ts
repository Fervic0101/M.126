import { AppHighlight } from './app-highlight';

describe('AppHighlight', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('input') } as any;
    const directive = new AppHighlight(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
