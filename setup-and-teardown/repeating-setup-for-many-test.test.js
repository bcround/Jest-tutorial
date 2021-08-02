// 여러 테스트에서 반복해야 하는 작업이 있는 경우, beforeEach와 afterEach를 사용할 수 있다.
// 예를 들어, 도시의 데이터베이스와 상호작용하는 여러 테스트가 있다고 가정해보자.
// 각 테스트 전에 호출되어야만하는 메서드 initializeCityDatabase()가 있고, 각 테스트 후에 호출되어야만하는 clearCityDatabase()가 있다.
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city databse has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

// beforeEach와 afterEach도 테스트가 비동기 코드 처리를 할 수 있는것처럼 비동기 코드를 처리할 수 있다. - done 매개변수를 가지거나 promise를 반환할 수 있다.
// 예를 들어, 데이터베이스가 초기화되었을때 initializeCityDatabase()가 promise를 반환했다면, 그 promise를 반환해야한다.
beforeEach(() => {
  return initializeCityDatabase();
});
