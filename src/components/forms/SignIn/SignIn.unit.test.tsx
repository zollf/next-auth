import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CompleteField, ClickButton } from '@/test/helpers';

import SignIn from './';

jest.mock('next/router');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const SignInAuth = jest.spyOn(require('next-auth/client'), 'signIn');

const component = <SignIn />;

describe('<SignInForm />', () => {
  let wrapper!: ReactWrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    SignInAuth.mockImplementation(() => Promise.resolve({ error: undefined }));
    wrapper = mount(component);
  });

  it('matches its snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('complete sign in form', async () => {
    CompleteField(wrapper, 'name', 'MyUsername');
    CompleteField(wrapper, 'password', 'MySecretPassword');
    await ClickButton(wrapper, 'button');
    wrapper.update();
    expect(SignInAuth).toHaveBeenCalled();
  });

  it('completes form unsuccessfully', async () => {
    expect(wrapper.find('fieldset').props()['data-test-error']).toBe(false);
    SignInAuth.mockImplementation(() => Promise.resolve({ error: 'CredentialError' }));
    wrapper = mount(component);
    CompleteField(wrapper, 'name', 'MyUsername');
    CompleteField(wrapper, 'password', 'MySecretPassword');
    await ClickButton(wrapper, 'button');
    wrapper.update();
    expect(SignInAuth).toHaveBeenCalled();
    expect(wrapper.find('fieldset').props()['data-test-error']).toBe(true);
  });
});
