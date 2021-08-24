# Mock functions
- Mock functions를 사용하면 함수의 실제 구현을 없애고, 함수에 대한 호출(및 호출에 전달된 매개 변수)을 캡처하고, 
새 인스턴스를 만들때 생성자 함수의 인스턴스를 캡처하고, 반환 값의 테스트 시간 설정을 허용하여 코드 간의 연결을 테스트 할 수 있다.
- Mock functions을 만드는데 두 가지 방법이 있는데, test code에서 사용할 mock functions를 만들거나, 모듈 종속성을 재정의하는 `manual mock`을 작성하는 것이다.
