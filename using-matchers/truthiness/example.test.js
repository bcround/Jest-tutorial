// test에서, 때때로 undefined와 null 과 false를 구분해야 되는 경우가 있지만, 때때로는 이것들을 다르게 처리하지 않고 싶을때도 있다.
// Jest에는 원하는 내용을 명시할 수 있는 helpers가 포함되어있다.

// toBeNull은 null만과 일치한다
// toBeUndefined는 undefined만과 일치한다
// toBeDefined는 toBeUndefined의 반대이다.
// toBeTruthy는 if 문이 true로 간주하는 모든것과 일치한다.
// toBeFalsy는 if 문이 false로 간주하는 모든것과 일치한다.
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
