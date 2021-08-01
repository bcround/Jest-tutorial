// toMatch를 사용하여 문자열을 정규표현식과 비교할 수 있다.
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
