import React from 'react';
import Table from '@colbycommunications/colby-table-component';
import common from '../common.css';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import notification from '@colbycommunications/colby-notification';
import customTemplate from './template/customTemplate.js';

import robustData from './data.js';

export default { title: 'Table', decorators: [withA11y, withKnobs] };

export const Simple = () => {
    let data = [
        { id: 1, name: 'John', email: 'john@hotmail.com' },
        { id: 2, name: 'Jacob', email: 'jacob@aol.com' },
        { id: 3, name: 'Jingleheimer', email: 'jingleheimer@yahoo.com' },
        { id: 4, name: 'Smith', email: 'smith@gmail.com' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'E-mail' },
    ];

    return (
        <div className={common.demoContainer}>
            <Table columns={columns} data={data} saveState={false} />
        </div>
    );
};

export const SortableAndFilterable = () => {
    let data = [
        { id: 1, name: 'Jack', date: '2017-04-25 20:23:05' },
        { id: 2, name: 'Jill', date: '2017-04-01 20:36:36' },
        { id: 3, name: 'Phil', date: '2018-06-30 20:12:11' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name', sort: true, filter: true },
        { name: 'date', label: 'Date', sort: true, filter: true, filterSettings: { type: 'date' } },
    ];

    return (
        <div className={common.demoContainer}>
            <Table columns={columns} data={data} orderBy="name" saveState={false} />
        </div>
    );
};

export const WithRowNumbers = () => {
    let data = [
        { id: 1, name: 'Oddjob', email: 'oddjob@hotmail.com' },
        { id: 2, name: 'Jaws', email: 'jaws@aol.com' },
        { id: 3, name: 'Nick Nack', email: 'nicknack@yahoo.com' },
    ];
    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'E-mail' },
    ];

    return (
        <div className={common.demoContainer}>
            <Table columns={columns} data={data} isRowNumber saveState={false} />
        </div>
    );
};

export const ClickableRows = () => {
    let data = [
        { id: 1, name: 'Athos', profession: 'Musketeer' },
        { id: 2, name: 'Porthos', profession: 'Musketeer' },
        { id: 3, name: 'Aramis', profession: 'Musketeer' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'profession', label: 'Profession' },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={data}
                showRowClickable
                onRowClick={(row) => {
                    notification({
                        message: (
                            <div>
                                Clicked row: <pre>{JSON.stringify(row, null, 4)}</pre>
                            </div>
                        ),
                        inModal: true,
                    });
                }}
                saveState={false}
            />
        </div>
    );
};

export const HighlightedRows = () => {
    let data = [
        { id: 1, name: 'Harry', profession: 'Wizard' },
        { id: 2, name: 'Ron', profession: 'Witch' },
        { id: 3, name: 'Hermione', profession: 'Wizard' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'profession', label: 'Profession' },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={data}
                setRowClass={(row) => row.name === 'Ron' && 'table-success'}
                saveState={false}
            />
        </div>
    );
};

export const DifferentRowsPerPage = () => {
    let data = [
        { id: 1, name: 'Athos', profession: 'Musketeer' },
        { id: 2, name: 'Porthos', profession: 'Musketeer' },
        { id: 3, name: 'Aramis', profession: 'Musketeer' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'profession', label: 'Profession' },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={data}
                perPage={2}
                perPageOptions={[2, 10]}
                saveState={false}
            />
        </div>
    );
};

export const RenderAsList = () => {
    let data = [
        { id: 1, name: 'Bill', email: 'Bill@hotmail.com' },
        { id: 2, name: 'Will', email: 'Will@aol.com' },
        { id: 3, name: 'Jill', email: 'jill@yahoo.com' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name', sort: true, filter: true },
        { name: 'email', label: 'E-mail', sort: true, filter: true },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={data}
                renderAsList={(row, index) => (
                    <div>
                        <h3>
                            {index}. {row.name}
                        </h3>
                        <a href={'mailto:' + row.email}>{row.email}</a>
                    </div>
                )}
                showPerPageOptions={false}
                orderBy="name"
                saveState={false}
            />
        </div>
    );
};

export const RenderAsListWithCustomTemplate = () => {
    let data = [
        { id: 1, name: 'Bill', email: 'Bill@hotmail.com' },
        { id: 2, name: 'Will', email: 'Will@aol.com' },
        { id: 3, name: 'Jill', email: 'jill@yahoo.com' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name', sort: true, filter: true },
        { name: 'email', label: 'E-mail', sort: true, filter: true },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={data}
                renderAsList={(row, index) => (
                    <div>
                        <h3>
                            {index}. {row.name}
                        </h3>
                        <a href={'mailto:' + row.email}>{row.email}</a>
                    </div>
                )}
                listTemplate={customTemplate}
                orderBy="name"
                saveState={false}
            />
        </div>
    );
};

export const RowActions = () => {
    let data = [
        { id: 1, name: 'Curly', profession: 'Stooge' },
        { id: 2, name: 'Larry', profession: 'Stooge' },
        { id: 3, name: 'Moe', profession: 'Stooge' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'profession', label: 'Profession' },
    ];

    const rowActions = [
        { name: 'Do something', action: () => notification('Some action') },
        {
            name: 'Do something else',
            action: () => notification({ message: 'Another action', type: 'info' }),
        },
    ];

    return (
        <div className={common.demoContainer}>
            <Table columns={columns} data={data} rowActions={rowActions} saveState={false} />
        </div>
    );
};

export const SimpleCheckboxesAsRowActions = () => {
    let data = [
        { id: 1, name: 'Kirk', email: 'kirk@gmail.com' },
        { id: 2, name: 'Spock', email: 'spock@gmail.com' },
        { id: 3, name: 'Bones', email: 'bones@gmail.com' },
    ];

    let columns = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'E-mail' },
    ];

    const rowActions = [
        { name: 'Do something', action: () => notification('Some action') },
        {
            name: 'Do something else',
            action: () => notification({ message: 'Another action', type: 'info' }),
        },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={data}
                rowActions={rowActions}
                isSimpleCheckboxes
                saveState={false}
            />
        </div>
    );
};

export const RobustExample = () => {
    let columns = [
        {
            name: 'image',
            label: 'Image',
            render(value, item, callbacks) {
                return (
                    <div className="text-center">
                        <img src={value} />
                    </div>
                );
            },
        },
        { name: 'name', label: 'Name', sort: true, filter: true },
        { name: 'email', label: 'E-mail' },
        { name: 'title', label: 'Title', filter: true },
    ];

    const rowActions = [
        { name: 'Do something', action: () => notification('Some action') },
        {
            name: 'Do something else',
            action: () => notification({ message: 'Another action', type: 'info' }),
        },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={robustData}
                rowActions={rowActions}
                isAscentOrder
                orderBy="name"
                saveState={false}
            />
        </div>
    );
};

export const RobustExampleCombinedFields = () => {
    let columns = [
        {
            name: 'image',
            label: '',
            render(value, item, callbacks) {
                return (
                    <div className="text-center">
                        <img src={value} />
                    </div>
                );
            },
        },
        {
            name: 'name',
            label: 'Name/Title',
            sort: true,
            filter: true,
            filterSettings: {
                type: 'text',
                custom: (row, value) => {
                    return (
                        row.name.toLowerCase().includes(value.toLowerCase()) ||
                        row.title.toLowerCase().includes(value.toLowerCase())
                    );
                },
            },
            render(value, item, callbacks) {
                return (
                    <div>
                        <b>{value}</b>
                        <br />
                        <span className="text-muted">{item.title}</span>
                    </div>
                );
            },
        },
        { name: 'email', label: 'E-mail', sort: true, filter: true },
    ];

    const rowActions = [
        { name: 'Do something', action: () => notification('Some action') },
        {
            name: 'Do something else',
            action: () => notification({ message: 'Another action', type: 'info' }),
        },
    ];

    return (
        <div className={common.demoContainer}>
            <Table
                columns={columns}
                data={robustData}
                rowActions={rowActions}
                isAscentOrder
                orderBy="name"
                noRecordsMessage="No employee records found"
                saveState={false}
            />
        </div>
    );
};
