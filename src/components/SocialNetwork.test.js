import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetwork from './SocialNetwork';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});


const thunk = (apiFn, prefix) => async dispatch => {
  dispatch({type: `${prefix}_STARTED`})
  try {
    const value = await apiFn()
    dispatch({type: `${prefix}_COMPLETED`, payload: value})
  } catch(error) {
    dispatch({type: `${prefix}_ERROR`, payload: error.message, error: true})
  } 
}

test('thunk', async () => {
  const fakeDispatch = jest.fn()
  const fakeApi = jest.fn(async() => 'fake_payload');

  // redux-thunk
  await thunk(fakeApi, 'LOAD_AUTHORS')(fakeDispatch);

  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch.mock.calls.length).toBe(2);
  expect(fakeDispatch.mock.calls[0][0]).toEqual({type: 'LOAD_AUTHORS_STARTED'});
  expect(fakeDispatch.mock.calls[1][0]).toEqual({type: 'LOAD_AUTHORS_COMPLETED', payload: 'fake_payload'});
  expect(fakeApi).toHaveBeenCalled();
})

test('catch', async() => {
  const fakeDispatch = jest.fn();
  const fakeApi = jest.fn(async() => {throw new Error('Failed !!')});

  // redux-thunk
  await thunk(fakeApi, 'TEST')(fakeDispatch);

  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch.mock.calls.length).toBe(2);
  expect(fakeDispatch.mock.calls[0][0]).toEqual({type: 'LOAD_AUTHORS_STARTED'});
  expect(fakeDispatch.mock.calls[1][0]).toEqual({type: 'LOAD_AUTHORS_FAILED', payload: 'Failed !!', error: true});
  expect(fakeApi).toHaveBeenCalled();
})