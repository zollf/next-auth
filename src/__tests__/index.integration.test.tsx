import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import client from 'next-auth/client';
import { Session } from 'next-auth';
import toJson from 'enzyme-to-json';

import Index from '@/pages';

const signOutMock = jest.spyOn(client, 'signOut');

const component = <Index />;

const mockSession: Session = {
  expires: '1',
  user: { email: 'a', name: 'Delta', image: 'c' },
};

describe('<Index />', () => {
  let wrapper!: ReactWrapper;
  beforeEach(() => {
    (client.useSession as jest.Mock).mockReturnValueOnce([undefined, false]);
    wrapper = mount(component);
  });

  it('matches its snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('is logged in', () => {
    expect(wrapper.find('Wrapper').props()['data-logged-in']).toBe(false);
  });

  describe('Logged in', () => {
    beforeEach(() => {
      (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
      wrapper = mount(component);
    });

    it('matches its snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('is logged in', () => {
      expect(wrapper.find('Wrapper').props()['data-logged-in']).toBe(true);
    });

    it('sign out calls function', () => {
      wrapper.find('[data-test-id="logout"]').simulate('click');
      expect(signOutMock).toBeCalled();
    });
  });
});
