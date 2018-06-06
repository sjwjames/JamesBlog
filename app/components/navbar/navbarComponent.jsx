import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, NavLink, Link } from 'react-router-dom'
import './navbar.less'

export default class NavBarComponent extends Component {
    render() {
        const { columns, isFetching } = this.props;

        return (
            <div className='ui secondary pointing menu sjwjames-blog-menu'>
                {columns.map((column, index) =>
                    <Route path={column.route} key={column.id} label={column.name} children={({ match }) => (
                        // <li className={match ? 'active item' : 'item'}>
                        //     <Link to={column.route}>{column.name}</Link>
                        // </li>
                        <NavLink className='item' to={column.route}>{column.name}</NavLink>
                    )} />
                    // <NavLink className='item' key={column.id} to={column.route}>{column.name}</NavLink>
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