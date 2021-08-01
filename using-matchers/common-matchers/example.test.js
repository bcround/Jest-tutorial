// expect(2 + 2)는 "expectation" 객체를 반환한다.
// 일반적으로 이러한 expectation 객체에는 matcher들을 호출하는것을 제외하고 많은 작업을 수행하지는 않는다.
// 아래의 코드에서 .toBe(4)는 matcher이다.

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// toBe는 Object.is를 사용하여 정확한 동일성을 테스트한다.
// 객체의 값을 비교하고싶으면, toBe 대신에 toEqual을 사용해야한다.
// toEqual은 객체 또는 배열의 모든 필드를 반복적으로 검사한다.

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// matcher의 반대도 테스트할 수 있다.
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
