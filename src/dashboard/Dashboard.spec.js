import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

test ('Dashboard renders correctly', () => {
    const dashboard = render (<Dashboard />)
    expect (dashboard).toMatchSnapshot();
})

