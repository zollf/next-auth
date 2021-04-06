import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.env.NEXTAUTH_URL = 'http://localhost:3000';

jest.mock('next-auth/client');

configure({ adapter: new Adapter() });
