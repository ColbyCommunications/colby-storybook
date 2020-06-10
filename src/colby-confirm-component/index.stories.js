import React from 'react';
import Confirm from '@colbycommunications/colby-confirm-component';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default { title: 'Confirm Box', decorators: [withA11y, withKnobs] };

export const Simple = () => (
    <div className={common.demoContainer}>
        <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
                Confirm({
                    message: 'Are you absolutely sure?',
                    description: 'You are about to delete one record',
                    confirmLabel: 'Yes',
                    abortLabel: 'No',
                })
                    .then(() => {
                        // do something when 'Yes' has been pressed
                    })
                    .fail(() => {
                        // do something when 'No' has been pressed
                    });
            }}
        >
            Delete
        </button>
    </div>
);

export const Ominous = () => (
    <div className={common.demoContainer}>
        <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
                Confirm({
                    message: 'Woah! Are you sure you want to proceed?',
                    description:
                        'It does not really matter to me, but, please think about about all your options first',
                    confirmLabel: 'I accept the consequences',
                    abortLabel: 'Run & Hide',
                })
                    .then(() => {
                        // Do something after "Yes" is pressed.
                    })
                    .fail(() => {
                        // Do something after "No" is pressed.
                    });
            }}
        >
            Click me, if you dare...
        </button>
    </div>
);
