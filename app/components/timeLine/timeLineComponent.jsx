import React, { Component } from 'react'
import PropTypes from 'prop-types'
import timeLineStyle from './timeLine.less'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export default class TimeLineComponent extends Component {
    // constructor(props) {
    //     super(props)

    // }

    // componentDidMount() {
    //     this.renderCanvas()
    // }

    // renderCanvas = () => {

    // }

    render() {
        const { archives, height, category } = this.props;

        return (
            <div className='time-line four wide column'>
                <ul>
                    {archives.data.map((archive, index) =>
                        <li key={index}>
                            <div>
                                <NavLink to={{
                                    pathname: category.route,
                                    search:'?timestamp='+archive.timestamp,
                                    state: { selectedColumn: category }
                                }}>{moment(archive.timestamp).format('YYYY-MM')}</NavLink>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

TimeLineComponent.propTypes = {

};