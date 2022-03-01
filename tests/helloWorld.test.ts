import { sayHello } from '../src/helloWorld';

test('测试 sayHello', () => {
  const msg = sayHello();
  expect(msg).toBe('hello world');
});
