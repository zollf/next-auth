import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.env.NEXTAUTH_URL = 'http://localhost:3000';

jest.mock('next-auth/client');

import { GlobalWithFetchMock } from 'jest-fetch-mock';

const customGlobal: GlobalWithFetchMock = (global as any) as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

configure({ adapter: new Adapter() });
