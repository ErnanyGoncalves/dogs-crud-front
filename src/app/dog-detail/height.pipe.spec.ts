import { HeightPipe } from './height.pipe';

describe('HeightPipe', () => {
  let pipe: HeightPipe;

  beforeEach(() => {
    pipe = new HeightPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add cm', () => {
    const transformedText = pipe.transform(5);
    expect(transformedText).toBe('5 cm');
  });
});
