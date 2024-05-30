import { AgePipe } from './age.pipe';

describe('AgePipe', () => {
  let pipe: AgePipe;

  beforeEach(() => {
    pipe = new AgePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add year', () => {
    const transformedText = pipe.transform(1);
    expect(transformedText).toBe('1 year old');
  });

  it('should add years', () => {
    const transformedText = pipe.transform(2);
    expect(transformedText).toBe('2 years old');
  });
});
