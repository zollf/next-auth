import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';

const CompleteField = (wrapper: ReactWrapper, name: string, value: string | number) => {
  wrapper.find(`input[name="${name}"]`).simulate('change', {
    target: { name, value },
  });
};

const ClickButton = async (wrapper: ReactWrapper, name: string) => {
  await act(async () => {
    wrapper.find(name).simulate('click');
  });
};

export { CompleteField, ClickButton };
