import { WeightPipe } from './weight.pipe';

describe('WeightPipe', () => {
  let pipe: WeightPipe;

  beforeEach(() => {
    pipe = new WeightPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add kg', () => {
    const transformedText = pipe.transform(5);
    expect(transformedText).toBe('5 kg');
  });

  it('should add g', () => {
    const transformedText = pipe.transform(0.5);
    expect(transformedText).toBe('500 g');
  });
});
