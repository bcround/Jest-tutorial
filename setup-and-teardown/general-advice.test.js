// 테스트가 실패하는 경우, 가장 먼저 검사해야 할 사항 중 하나는 그 테스트가 실행되는 유일한 테스트일 때 테스트가 실패하는지의 여부이다.
// Jest로 하나의 테스트만 실행하려면 해당 test 커맨드를 일시적으로 test.only로 변경해라.
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});

// 테스트가 큰 제품의 일부로 실행할때는 종종 실패하지만 단독으로 실행할 때는 실패하지 않는 테스트가 있다면 다른 테스트의 무언가가 이 테스트를 방해하고 있다는 것이다.
// beforeEach의 공유된 일부 상태를 삭제하여 이 문제를 해결할 수 있다. 공유된 일부 상태가 수정되고 있는지 확실하지 않은 경우, 데이터를 로그하는 beforeEach를 시도해볼 수도 있다.
