import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './navbar.less'

export default class NavBarComponent extends Component {
    render() {
        const { columns, isFetching } = this.props;
        const isActive = (path, match, location) => !!(match || path === location.pathname);
        return (
            <div className='ui secondary pointing menu sjwjames-blog-menu'>
                {columns.map((column, index) =>
                    <NavLink className='item' key={column.id} to={{
                        pathname: column.route,
                        state: { selectedColumn: column }
                    }} isActive={isActive.bind(this, column.route)}>{column.name}</NavLink>
                )}
                <div className='right menu'>
                    <div className='ui category search'>
                        <div className='ui icon input'>
                            <input type="text" className='prompt' placeholder='Search Articles' />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </div>
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