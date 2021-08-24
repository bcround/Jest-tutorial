// 반환 값을 지정하는 기능에서 벗어나 mock function의 구현을 완전히 대체하는 것이 유용한 경우도 있다.
// 위의 작업은 jest.fn 또는 mock function에 대한 mockImplementationOnce 메서드로 할 수 있다.

const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));

// > true

// mockImplementation 메서드는 다른 모듈에서 생성된 mock function의 기본 구현을 정의할 때 유용하다.

// foo.js
module.exports = function () {
  // some implementation;
};

// test.js
jest.mock('../foo'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42);
foo();
// > 42

// 여러 함수 호출이 다른 결과를 생성하도록 mock function의 복잡한 동작을 다시 만들어야 하는 경우 mockImplementationOnce 메서드를 사용해라.

const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > false

// mock function이 mockImplementationOnce로 정의된 구현이 부족할 경우 jest.fn(정의된 경우)으로 기본 구현을 실행한다.
const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
