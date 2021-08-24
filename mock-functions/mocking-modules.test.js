// 이제 API를 실제로 요청하지 않고 (느리고 취약한 테스트를 생성하지 않기 위해) Users 클래스에 잇는 method를 테스트하기 위해
// jest.mock(...) 함수를 사용하여 자동으로 axios module을 흉내낼 수 있다.

import { expect } from '@jest/globals';
import axios from 'axios';
import Users from './users';

jest.mock('axios');

// module을 흉내내면 테스트에서 사용될 데이터를 반환하는 .get에 대한 mockedResolvedValue를 반환할 수 있다.
// 사실상, 우리는 axios.get('/users.json')이 가짜 응답을 반환하기를 원하는 것이다.

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
