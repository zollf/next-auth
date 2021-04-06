import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignIn from '@/pages/signIn';

const component = <SignIn />;

jest.mock('next/router', () => ({
  useRouter: () => ({ query: { error: undefined } }),
}));

describe('<SignIn />', () => {
  let wrapper!: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(component);
  });

  it('matches its snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
