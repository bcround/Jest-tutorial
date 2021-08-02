// Jest는 실제 test들을 실행하기전에 test 파일안에 모든 describe handler들을 실행시킨다.
// 이는 describe block이 아닌 before*와 after* 핸들러 내부에서 setup 및 teardown을 해야하는 또 다른 이유이다.
// describe blocks이 완료 되면 기본적으로 Jest는 모든 테스트를 수집 단계에서 접한 순서대로 실행하고 각 블록이 완료되기를 기다렸다가 계속 진행한다.
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
