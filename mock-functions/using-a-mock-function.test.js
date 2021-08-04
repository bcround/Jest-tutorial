// 제공된 배열의 각 아이템에 대해 콜백함수를 호출하는 forEach라는 함수의 구현을 테스트한다고 가정해보자.
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

// 위의 함수를 테스트 하기위해, mock function을 사용하고 mock의 상태를 검사하여 콜백함수가 예상대로 호출되는지 확인할 수 있다.
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

// The mock function is called twice
test('The mock function is called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

// The first argument of the first call to the function was 0
test('The first argument of the first call to the function was 0', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
});

// The first argument of the second call to the function was 1
test('The first argument of the second call to the function was 1', () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

// The return value of the first call to the function was 42
test('The return value of the first call to the function was 42', () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
});

// .mock 속성
// 모든 mock functions은 특수한 .mock 속성을 가지고 있으며, 여기서 함수가 호출된 방식과 반환된 함수에 대한 데이터가 보관된다.
// .mock 속성은 또한 각 호출에 대한 this의 값도 추적하므로 다음과 같은 항목도 검사할 수 있다.
const myMock = jest.fn();

const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();

console.log(myMock.mock);
// {
//   calls: [ [], [] ],
//   instances: [ mockConstructor {}, {} ],
//   invocationCallOrder: [ 3, 4 ],
//   results: [
//     { type: 'return', value: undefined },
//     { type: 'return', value: undefined }
//   ]
// }
console.log(myMock.mock.instances); //[ mockConstructor {}, {} ]

// 이러한 mock members들은 함수들이 어떻게 호출, 인스턴스화 또는 반환되는지를 확인하기 위한 테스트에서 매우 유용하다.
// 예시들
// The function was called exactly once
expect(someMockFunction.mock.calls.length).toBe(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toEqual('test');
