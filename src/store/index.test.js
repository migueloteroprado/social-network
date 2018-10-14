const thunk = (apiFn, prefix) => async dispatch => {
  dispatch({type: `${prefix}_STARTED`})
  try {
    const value = await apiFn()
    dispatch({type: `${prefix}_SUCCESS`, payload: value})
  } catch(error) {
    dispatch({type: `${prefix}_ERROR`, payload: error.message, error: true})
  } 
}

test('Authors Thunk', async () => {
  const fakeDispatch = jest.fn()
  const fakeApi = jest.fn(async() => 'fake_payload');

  // redux-thunk
  await thunk(fakeApi, 'LOAD_AUTHORS')(fakeDispatch);

  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch.mock.calls.length).toBe(2);
  expect(fakeDispatch.mock.calls[0][0]).toEqual({type: 'LOAD_AUTHORS_STARTED'});
  expect(fakeDispatch.mock.calls[1][0]).toEqual({type: 'LOAD_AUTHORS_SUCCESS', payload: 'fake_payload'});
  expect(fakeApi).toHaveBeenCalled();
})

test('Authors Catch', async() => {
  const fakeDispatch = jest.fn();
  const fakeApi = jest.fn(async() => {throw new Error('Failed !!')});

  // redux-thunk
  await thunk(fakeApi, 'LOAD_AUTHORS')(fakeDispatch);

  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch.mock.calls.length).toBe(2);
  expect(fakeDispatch.mock.calls[0][0]).toEqual({type: 'LOAD_AUTHORS_STARTED'});
  expect(fakeDispatch.mock.calls[1][0]).toEqual({type: 'LOAD_AUTHORS_ERROR', payload: 'Failed !!', error: true});
  expect(fakeApi).toHaveBeenCalled();
})

test('Login Thunk', async () => {
  const fakeDispatch = jest.fn()
  const fakeApi = jest.fn(async() => 'fake_payload');

  // redux-thunk
  await thunk(fakeApi, 'LOGIN')(fakeDispatch);

  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch.mock.calls.length).toBe(2);
  expect(fakeDispatch.mock.calls[0][0]).toEqual({type: 'LOGIN_STARTED'});
  expect(fakeDispatch.mock.calls[1][0]).toEqual({type: 'LOGIN_SUCCESS', payload: 'fake_payload'});
  expect(fakeApi).toHaveBeenCalled();
})

test('Login Catch', async() => {
  const fakeDispatch = jest.fn();
  const fakeApi = jest.fn(async() => {throw new Error('Failed !!')});

  // redux-thunk
  await thunk(fakeApi, 'LOGIN')(fakeDispatch);

  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch.mock.calls.length).toBe(2);
  expect(fakeDispatch.mock.calls[0][0]).toEqual({type: 'LOGIN_STARTED'});
  expect(fakeDispatch.mock.calls[1][0]).toEqual({type: 'LOGIN_ERROR', payload: 'Failed !!', error: true});
  expect(fakeApi).toHaveBeenCalled();
})