import React from 'react';
import notification from '@colbycommunications/colby-notification';
import 'bootstrap/dist/css/bootstrap.css?raw';
import common from '../common.css';

export default { title: 'Notification' };

export const Simple = () => (
    <div className={common.demoContainer}>
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => notification('Simple Notification')}
        >
            Click Me
        </button>
    </div>
);
export const DifferentTypes = () => {
    const showSuccessNotification = () => {
        notification({ message: 'Success', type: 'success' });
    };

    const showInfoNotification = () => {
        notification({ message: 'Info', type: 'info' });
    };

    const showWarningNotification = () => {
        notification({ message: 'Warning', type: 'warning' });
    };

    const showDangerNotification = () => {
        notification({ message: 'Danger', type: 'danger' });
    };

    return (
        <div className={common.demoContainer}>
            <button type="button" className="btn btn-primary" onClick={showSuccessNotification}>
                Success
            </button>{' '}
            <button type="button" className="btn btn-primary" onClick={showInfoNotification}>
                Info
            </button>{' '}
            <button type="button" className="btn btn-primary" onClick={showWarningNotification}>
                Warning
            </button>{' '}
            <button type="button" className="btn btn-primary" onClick={showDangerNotification}>
                Danger
            </button>
        </div>
    );
};

export const ModalWithData = () => {
    const data = {
        errors: {
            first_error_key: ['You got an error!', 'You got another error!'],
        },
    };

    const onClick = () => {
        notification({
            message: 'Notification in modal',
            data,
            inModal: true,
        });
    };

    return (
        <div className={common.demoContainer}>
            <button type="button" className="btn btn-primary" onClick={onClick}>
                Click Me
            </button>
        </div>
    );
};
