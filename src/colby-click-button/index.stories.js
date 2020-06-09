import React, { useState } from 'react';
import Button from '@colbycommunications/colby-click-button-component';
import notification from '@colbycommunications/colby-notification';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Click Button', decorators: [withA11y, withKnobs] };

export const Simple = () => (
    <div className={common.demoContainer}>
        <Button title="Submit" />
    </div>
);

export const Loading = () => (
    <div className={common.demoContainer}>
        <Button title="Submit" className="btn btn-primary" isLoading />
    </div>
);

export const OnClickCallback = () => (
    <div className={common.demoContainer}>
        <Button
            title="Submit"
            className="btn btn-primary"
            onClick={() => notification('Button Clicked')}
        />
    </div>
);
