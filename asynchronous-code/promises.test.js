// test에서 promise를 반환하면 Jest는 promise가 resolve되는것을 기다릴것이다. promise가 rejected되면, 자동적으로 테스트가 실패할것이다.

// 예를들어, fetchData가 callback을 사용하는 대신에 'peanut butter' 문자열로 resolved하는 promise를 반환한다고 가정해보자.
// return문을 생략한다면, fetchData에서 반한된 promise가 resolve하고 then()이 callback을 실행하기도전에, test가 완료될것이다.
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// 만약 promise가 reject되길 기대한다면, .catch 메서드를 사용한다.
// 특정 수의 assertions이 호출됬는지 확인하려면 expect.assertions를 추가해야 한다. 그렇지 않으면, fullfilled된 promise는 테스트에 실패하지 않을 것이다.
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});

// expect문에서 .resolves나 .rejects matcher를 사용할 수도 있다.
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});
