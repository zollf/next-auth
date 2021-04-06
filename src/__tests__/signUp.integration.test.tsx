import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignUp from '@/pages/signUp';

const component = <SignUp />;

describe('<SignUp />', () => {
  let wrapper!: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(component);
  });

  it('matches its snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
