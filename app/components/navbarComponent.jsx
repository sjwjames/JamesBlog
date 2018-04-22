import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class NavBarComponent extends Component {
    render() {
        const { columns, isFetching } = this.props;

        return (
            <div className='sjwjames-nav-section'>
                <ul className='sjwjames-nav-bar'>
                    {columns.map((column, index) =>
                        <li key={column.id}>{column.name}</li>
                    )}
                </ul>
            </div>

        )
    }
}

NavBarComponent.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            route: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    isFetching: PropTypes.bool.isRequired
};