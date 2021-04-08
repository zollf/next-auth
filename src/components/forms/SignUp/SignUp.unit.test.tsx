import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CompleteField, ClickButton } from '@/test/helpers';

import SignUp from './';

jest.mock('next/router');

const component = <SignUp />;

describe('<SignUpForm />', () => {
  let wrapper!: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(component);
  });

  it('matches its snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('complete form correctly', async () => {
    fetchMock.mockResponse(JSON.stringify({ error: undefined }));
    CompleteField(wrapper, 'name', 'MyUsername');
    CompleteField(wrapper, 'password', 'MySecretPassword');
    await ClickButton(wrapper, 'button');
    wrapper.update();
    expect(wrapper.find('fieldset').props()['data-test-error']).toBe(false);
  });

  it('complete form unsuccessfully', async () => {
    fetchMock.mockResponse(JSON.stringify({ error: 'Error' }));
    wrapper = mount(component);
    CompleteField(wrapper, 'name', 'MyUsername');
    CompleteField(wrapper, 'password', 'MySecretPassword');
    await ClickButton(wrapper, 'button');
    wrapper.update();
    expect(wrapper.find('fieldset').props()['data-test-error']).toBe(true);
  });

  it('fetch returns error', async () => {
    fetchMock.mockRejectOnce();
    wrapper = mount(component);
    CompleteField(wrapper, 'name', 'MyUsername');
    CompleteField(wrapper, 'password', 'MySecretPassword');
    await ClickButton(wrapper, 'button');
    wrapper.update();
    expect(wrapper.find('fieldset').props()['data-test-error']).toBe(true);
  });

  it('non completed form returns error', async () => {
    CompleteField(wrapper, 'name', 'MyUsername');
    await ClickButton(wrapper, 'button');
    wrapper.update();
    expect(wrapper.find('fieldset').props()['data-test-error']).toBe(true);
  });
});
