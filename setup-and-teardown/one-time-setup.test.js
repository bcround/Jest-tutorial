// 경우에 따라, 파일 시작시 setup을 한번만 해야될 수도 있다. setup이 비동기 일때는 특히 성가실 수 있다.
// Jest는 이러한 상황을 처리하기위해 beforeAll과 afterAll을 제공한다.
// 예를 들어, initializeCityDatabase와 clearCityDatabase가 모두 promise를 반환하고 test간에 도시의 데이터베이스를 재사용할 수 있는 경우 test code를 다음과 같이 짤 수 있다.
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
