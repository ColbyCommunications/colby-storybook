import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/shared/app.scss';

addDecorator((story) => <>{story()}</>);
