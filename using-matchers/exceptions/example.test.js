// 특정 함수가 호출될때 오류가 발생하는지 테스트하려면 toThrow를 사용한다.
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

// Note: the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
