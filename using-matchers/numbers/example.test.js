test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe와 toEqual은 숫자에 대해 동일하게 작동한다.
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// 부동 소수점의 동일성의 경우, test가 사소한 반올림 오류에 종속되지 않도록 toEqual대신에 toBeCloseTo를 사용한다.
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3) 반올림 오류때문에 이 코드는 동작하지 않을것이다.
  expect(value).toBeCloseTo(0.3);
});
