import React from 'react';
import PropTypes from 'prop-types';
import style from './customTemplate.css';

export default class Component extends React.Component {
    static propTypes = {
        // All table props
        tableProps: PropTypes.object,

        // Rendered list of rows
        list: PropTypes.node,

        // Paginator
        paginator: PropTypes.node,

        // Block with sort fields
        sortBlock: PropTypes.node,

        // Block with filter fields
        filterBlock: PropTypes.node,

        // Object with all filter fields
        // You can render them separatly
        filters: PropTypes.object,

        // Text like that "Showing 1 of 3 rows"
        count: PropTypes.node,

        // Dropdown with perPage options
        perPageOptions: PropTypes.node,

        // Reload data button
        reloadDataButton: PropTypes.node,

        // List of rows for current page
        // You can use rows instead of "list" prop to render list
        rows: PropTypes.array,

        // Index for the first page row
        startNumber: PropTypes.number,

        // You can register some custom filter function
        // For example:
        // this.props.registerFilterFunction((row) => {
        //     return row.name === 'Bob' ;
        // });
        registerFilterFunction: PropTypes.func,
    };

    render() {
        return (
            <div className="row">
                <div className="col-lg-10 col-md-9 col-sm-8">
                    <div className={style.list}>{this.props.list}</div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                    {this.props.sortBlock && (
                        <div className={style.sorting}>
                            <div>{this.props.sortBlock}</div>
                        </div>
                    )}

                    {this.props.filterBlock && (
                        <div style={{ marginTop: '1rem' }}>
                            <h4>Filters:</h4>
                            <div>{this.props.count}</div>
                            <div>{this.props.filterBlock}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
