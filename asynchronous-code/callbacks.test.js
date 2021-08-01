// 예를 들어, 일부 데이터를 가져오고 완료되면 callback(data)를 호출하는 fetchData(callback) 함수가 있다고 해보자.
// 반환된 데이터가 'peanut butter' 문자열인지 테스트하려고한다.

// 다음과 같이 코드를 짜면, callback을 호출하기도전에, fetchData가 완료되는 즉시 테스트가 완료된다.
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

// 인수가 비어있는 함수를 test에 넣는 대신에 done 이라는 인수를 사용한다.
// Jest는 테스트를 완료하기 전에 done callback이 호출될때까지 기다린다.
// 만약 done() 호출되지 않으면, timeout error와 함께 테스트가 실패할 것이다.
// expect구문이 실패하면 error를 발생시키고 done()이 호출되지 않는다. 그러므로 왜 테스트가 실패했는지 test log를 보고싶으면 expect를 try문 안에넣고 error를 catch문안에 done에게 넘겨주면된다.

test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
